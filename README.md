# Jihea Yu — Research Profile

Personal research-profile website for Jihea Yu, built with React, Vinext, and Sites hosting.

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

After committing and pushing changes, ask Codex to deploy the current version of this site. The hosting setup is already connected to this repository; deployment credentials are managed securely by the hosting service and are not kept in this project.
