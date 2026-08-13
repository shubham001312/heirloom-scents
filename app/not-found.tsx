import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="section section--light"
      style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}
    >
      <Container>
        <div style={{ textAlign: "center" }}>
          <p className="eyebrow">404</p>
          <h1 className="display" style={{ fontSize: "var(--text-4xl)", marginTop: 0 }}>
            Page not found
          </h1>
          <p
            style={{
              color: "var(--color-text-muted)",
              marginBottom: "var(--space-8)",
            }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </main>
  );
}
