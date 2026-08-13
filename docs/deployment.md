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

| Variable               | Required | Description                                                                           |
| ---------------------- | -------- | ------------------------------------------------------------------------------------- |
| `WEB3FORMS_ACCESS_KEY` | Yes      | Web3Forms access key (get at https://web3forms.com)                                   |
| `INQUIRY_EMAIL`        | No       | Email address that receives inquiry notifications (default: hello@heirloomscents.com) |
| `RATE_LIMIT_MAX`       | No       | Max submissions per IP per window (default: 5)                                        |
| `RATE_LIMIT_WINDOW_MS` | No       | Rate limit window in ms (default: 900000 = 15 min)                                    |
| `NEXT_PUBLIC_SITE_URL` | No       | Base URL (default: https://heirloomscents.com)                                        |

> Note: `WEB3FORMS_ACCESS_KEY` must stay **server-only**. The inquiry form must
> submit through the `/api/inquiry` route — never expose the key to the browser.

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
