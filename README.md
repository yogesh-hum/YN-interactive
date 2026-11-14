# YN Interactive

A responsive, single-page digital-solutions website for YN Interactive. Built with React, TypeScript, Vite and Tailwind CSS.

## Features

- Responsive landing page with mobile/tablet navigation
- Service catalogue and interactive service selection
- Pricing plans and quote-request modal
- Interactive concept portfolio with demo previews
- WhatsApp and email enquiry handoff (no lead data is stored by this static site)
- About, process, FAQ and contact sections
- Reduced-motion-aware pointer effects and ambient visuals
- SEO metadata and ProfessionalService structured data

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Lucide React icons

## Requirements

- Node.js 22 (recommended)
- npm

## Local development

```bash
npm ci
npm run dev
```

Vite prints the local development URL after startup.

## Quality checks

```bash
npm run lint
npm run build
```

- `lint` runs the TypeScript compiler without emitting files.
- `build` creates the production bundle in `dist/`.

GitHub Actions runs both checks on pushes and pull requests to `main`.

## Deployment

This is a static Vite application. It can be deployed to Vercel or another static hosting provider.

For Vercel:
1. Import this GitHub repository.
2. Use `npm install` (or `npm ci`) as the install command.
3. Use `npm run build` as the build command.
4. Set `dist` as the output directory.
5. Deploy, then verify the production URL on mobile and desktop.

No server-side environment variables are currently required.

## Enquiry behavior and privacy

The contact and quote forms prepare a message and open WhatsApp or the visitor's email application. This repository does not include a backend lead database, analytics tracker, or server-side form submission. Do not promise that a lead has been delivered until the visitor sends the prepared message.

## Business contact configuration

Update the `BRAND` object in `src/data/content.ts` if the public business name, phone number, WhatsApp number or email changes. Keep `phone` and `phoneRaw` in sync.

## Demo portfolio

The restaurant, salon and fashion-store entries are explicitly labelled as concept/demo projects. Keep those labels unless they become real client work with permission to publish.
