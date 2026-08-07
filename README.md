# Jihea Yu — Research Profile

Personal research-profile website for Jihea Yu. The published site is deployed on Vercel as a static website.

## Site structure

- `/` — Profile introduction, contact links, and news timeline
- `/experience` — Education and research experience
- `/publications` — Publications placeholder and sprout animation

The content lives in these files:

- `app/page.tsx` — Home page
- `app/experience/page.tsx` — Experience page
- `app/publications/page.tsx` — Publications page
- `app/globals.css` — Shared visual styles
- `public/jihea-yu.jpg` — Profile photo

## Edit locally

Install dependencies once:

```powershell
npm install
```

Start the local development server:

```powershell
npm run dev
```

Before publishing a change, run:

```powershell
npm run build
```

## Update the website

- Add a news item in `app/page.tsx`, inside the `news-list`.
- Add a degree, lab, or research role in `app/experience/page.tsx`.
- Replace the placeholder in `app/publications/page.tsx` when the first publication is ready.
- Replace `public/jihea-yu.jpg` when updating the portrait.
- Change colors, typography, and responsive layout in `app/globals.css`.

## Redeploy

The Vercel deployment uses the files in `vercel-static/`. After changing the published site, run:

```powershell
npx vercel --prod
```

The first run may ask you to select your Vercel account or project. Vercel keeps the deployment credentials outside this repository.
