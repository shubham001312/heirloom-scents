# Deployment Notes — Heirloom Scents POC

## POC Review Deployment

The POC is deployed to an Autom8x review environment for client approval.

### Deploying to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (preview)
vercel

# Deploy to production (after client approval)
vercel --prod
```

### Environment Variables

Set these in the deployment platform's environment settings:

| Variable                           | Required | Description                                         |
| ---------------------------------- | -------- | --------------------------------------------------- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | No*      | Web3Forms access key (get at https://web3forms.com) |
| `NEXT_PUBLIC_SITE_URL`             | No       | Base URL (default: https://heirloomscents.com)      |

*Not strictly required — the site deploys and runs without it; the inquiry
form just shows a friendly "email us directly" message until it is set.

> **Free tier note:** Web3Forms' free plan only accepts **client-side**
> submissions. The inquiry form posts directly from the browser to
> `https://api.web3forms.com/submit`, and Web3Forms explicitly states the
> access key is safe to ship in client code (that is why it is prefixed
> `NEXT_PUBLIC_`). Server-side proxying returns `403` on the free plan — no
> Vercel upgrade needed. Web3Forms applies its own per-IP rate limiting.

### Setting env vars on Vercel (free Hobby plan)

Environment variables are free on the Hobby plan (up to 1,000 per project):

1. Open your project on vercel.com → **Settings → Environment Variables**
2. Add each variable for the **Production** environment (and Preview if desired)
3. Push a commit or redeploy — env var changes apply to new deployments only

If Vercel shows an upgrade prompt around environment variables, it is for a
Pro-only feature, not for setting plain values — for example:

- The **"Sensitive"** flag on an env var (Pro-only) — plain values are free
- **Custom environments** (staging) — Pro-only
- **Custom domains** are free on Hobby, but some workflows around them are not

You can safely ignore the "Try Pro free" banners; plain env vars work on the
free plan.

### Post-Deployment Checklist

- [ ] All pages render correctly
- [ ] Navigation works on mobile and desktop
- [ ] Inquiry form submits successfully
- [ ] Success and error states display correctly
- [ ] Security headers present (check with browser DevTools)
- [ ] No console errors
- [ ] Images load correctly
- [ ] Favicon displays in browser tab

## Production Deployment

Production hosting follows client confirmation of:

- Hosting provider
- Account ownership
- Domain access
- Environment configuration

### Before Production Handoff

- [ ] Build works in deployment environment
- [ ] Environment variables documented
- [ ] Domain settings configured
- [ ] Review URL shared with client
- [ ] Deployment notes written
- [ ] Content replacement notes written

## Domain Configuration

After client provides domain access:

1. Add custom domain in hosting platform
2. Configure DNS records
3. Enable HTTPS (auto via Vercel/Netlify)
4. Update `NEXT_PUBLIC_SITE_URL` environment variable
5. Update Open Graph URLs in layout metadata
