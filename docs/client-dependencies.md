# Client Dependencies — Heirloom Scents

Track all assets and approvals required from the client before development can proceed on specific features.

## Status Legend

- 🔴 **Required** — Cannot proceed without this
- 🟡 **Pending** — Client has been asked, awaiting response
- 🟢 **Received** — Asset received and approved
- ⚪ **Not Required** — Not needed for POC

---

## Brand Assets

| Asset                | Status      | Needed By               | Notes                                        |
| -------------------- | ----------- | ----------------------- | -------------------------------------------- |
| Logo files (SVG/PNG) | 🟢 Received | Phase 3 (Design System) | Traced to real vector — `public/logo.svg`    |
| Brand colors         | 🟢 Received | Phase 3 (Design System) | Maroon `#3a090e` / cream / gold — confirmed  |
| Brand fonts          | 🟢 Received | Phase 3 (Design System) | Amoresa + Mon Nicolette Grande (licensed, self-hosted); Instrument Serif + Inter for UI |
| Photography          | 🟢 Received | Phase 5 (Pages)         | Imported from client's Instagram archive    |
| Usage rights         | 🟢 Received | Phase 5 (Pages)         | Client-provided photos with license         |

## Content

| Asset                      | Status     | Needed By             | Notes                                           |
| -------------------------- | ---------- | --------------------- | ----------------------------------------------- |
| Approved copy — Home       | 🟢 Received | Phase 5a (Home)       | Live on site                                    |
| Approved copy — Experience | 🟢 Received | Phase 5b (Experience) | Live on site                                    |
| Approved copy — About      | 🟢 Received | Phase 5c (About)      | Live on site                                    |
| Event details              | 🟢 Received | Phase 5b (Experience) | Weddings, bridal showers, private events        |

## Contact & Social

| Asset              | Status          | Needed By              | Notes                                     |
| ------------------ | --------------- | ---------------------- | ----------------------------------------- |
| Contact email      | 🟢 Received     | Phase 4 (Shell/Footer) | hello@heirloomscents.com                  |
| Contact phone      | 🟡 Pending      | Phase 4 (Shell/Footer) | Not yet provided                          |
| Instagram link     | 🟢 Received     | Phase 4 (Shell/Footer) | https://www.instagram.com/heirloomscents/ |
| Facebook link      | ⚪ Not Required | —                      | Not confirmed                             |
| Other social links | 🟡 Pending      | Phase 4 (Shell/Footer) | TikTok, Pinterest, etc.                   |

## Inquiry Form

| Asset                  | Status     | Needed By          | Notes                                                                   |
| ---------------------- | ---------- | ------------------ | ----------------------------------------------------------------------- |
| Required form fields   | 🟢 Received | Phase 5e (Inquire) | name, email, event type, event date, guests, message                     |
| Submission destination | 🟢 Received | Phase 6 (Backend)  | Web3Forms (free plan, client-side submit)                               |
| Submission recipient   | 🟢 Received | Phase 6 (Backend)  | hello@heirloomscents.com (via Web3Forms key)                            |

## Legal

| Asset                   | Status          | Needed By | Notes                   |
| ----------------------- | --------------- | --------- | ----------------------- |
| Privacy policy copy     | ⚪ Not Required | POC       | Required for production |
| Terms of service copy   | ⚪ Not Required | POC       | Required for production |
| Accessibility statement | ⚪ Not Required | POC       | Required for production |

## Deployment

| Asset                     | Status     | Needed By          | Notes                                   |
| ------------------------- | ---------- | ------------------ | --------------------------------------- |
| Hosting provider          | 🟢 Live     | Phase 10 (Handoff) | Vercel (auto-deploys from GitHub)       |
| Domain access             | 🟡 Pending | Phase 10 (Handoff) | Currently on heirloom-scents.vercel.app |
| Hosting account ownership | 🟢 Live     | Phase 10 (Handoff) | Client's GitHub + Vercel accounts       |

---

## Notes

- **POC can proceed with placeholders** — Missing assets will use mockup content and placeholder images
- **Client has 3 business days** to respond to each review delivery (per SOW)
- **Deemed acceptance** — If no response within 3 business days, delivery is accepted
- **Scope changes** — Any feature outside POC scope requires separate written agreement

---

**Last Updated:** 2026-08-15
**Source:** Autom8x Heirloom Scents SOW (August 2026)
