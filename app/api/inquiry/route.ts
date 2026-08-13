import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation/inquiry";
import { submitInquiry } from "@/lib/inquiry/submit";

// Simple in-memory rate limiter (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = Number.parseInt(process.env.RATE_LIMIT_MAX || "5", 10);
const RATE_LIMIT_WINDOW_MS = Number.parseInt(
  process.env.RATE_LIMIT_WINDOW_MS || "900000",
  10
);

// Fall back to defaults if env vars are missing or not valid numbers
const effectiveMax =
  Number.isFinite(RATE_LIMIT_MAX) && RATE_LIMIT_MAX > 0 ? RATE_LIMIT_MAX : 5;
const effectiveWindowMs =
  Number.isFinite(RATE_LIMIT_WINDOW_MS) && RATE_LIMIT_WINDOW_MS > 0
    ? RATE_LIMIT_WINDOW_MS
    : 900000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + effectiveWindowMs });
    return true;
  }

  if (record.count >= effectiveMax) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    // Rate limit check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    // Parse request body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request format.",
        },
        { status: 400 }
      );
    }

    // Validate with Zod
    const result = inquirySchema.safeParse(body);
    if (!result.success) {
      const firstError = result.error.issues[0];
      return NextResponse.json(
        {
          success: false,
          message: firstError?.message || "Invalid input.",
          field: firstError?.path[0],
        },
        { status: 422 }
      );
    }

    const data = result.data;

    // Check honeypot
    if (data.website) {
      // Bot detected — return fake success
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been received.",
      });
    }

    // Submit via Web3Forms
    const submission = await submitInquiry(data);

    if (submission.success) {
      return NextResponse.json({
        success: true,
        message: submission.message,
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: submission.message,
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("[Inquiry API] Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
