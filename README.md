# Cannalogic Landing Page

## Local development

1. Install Node.js 20 or newer.
2. Install dependencies with `npm install`.
3. Copy `.env.local.example` to `.env.local` and set `PRIVATE_REDIRECT_URL` to the private HTTPS destination. Keep `.env.local` out of version control.
4. Run `npm run dev` and open `http://localhost:3000`.

The landing page links only to `/go`. The destination is read by `app/go/route.ts` on the server and is not exposed to the page or client bundle. The route returns a generic 503 response if the value is missing or not a valid HTTPS URL.

## Landing page assets

The landing page uses the official Cannalogic logo at `public/CL-logo-clr.png`, the Thampi Nagarjuna promotional badge at `public/TN BADGE COMPRESSED.png`, and the hemp-leaf image at `public/CANN LEAF COMPRESSED.png`. Keep the transparent PNG format for the logo and badge; the leaf image is displayed in a circular crop.

## Vercel deployment

1. Push the project to a Git provider and import it into Vercel as a Next.js project.
2. In **Project Settings → Environment Variables**, add `PRIVATE_REDIRECT_URL` with the HTTPS destination. Add it for each required environment (Production, Preview, and/or Development).
3. Deploy or redeploy after setting the variable. Do not add the `NEXT_PUBLIC_` prefix.

## Verification checklist

- Run `npm run build` and `npm run lint`.
- Check the page at 393×852, 360×800, and a desktop viewport; verify that it has no scrolling or clipped content.
- Tap/click the logo, headline, CTA, benefit row, corners, and open background; each should navigate to `/go`.
- With a valid HTTPS `PRIVATE_REDIRECT_URL`, confirm `/go` responds with HTTP 302 and a `Location` header for that URL.
- With the variable unset or set to malformed/non-HTTPS input, confirm `/go` returns HTTP 503 without revealing configuration details.
- Inspect the landing page HTML and client JavaScript to confirm the private destination is absent.
- Confirm `.env.local` is ignored by Git and never commit it.