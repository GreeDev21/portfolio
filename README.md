# GreeDev — Portfolio

Personal portfolio of **Agustín Burgos**, a Frontend Designer & Developer.

Built with [Astro](https://astro.build), deployed on [Vercel](https://vercel.com), with a functional contact form powered by [Resend](https://resend.com).

## Tech Stack

- **Framework:** [Astro](https://astro.build) v7 (SSR with `@astrojs/vercel`)
- **Deploy:** [Vercel](https://vercel.com) — Serverless functions
- **Email:** [Resend](https://resend.com) — Contact form delivery
- **i18n:** Custom EN/ES translation system with `data-i18n` attributes
- **Styling:** CSS custom properties, scoped Astro styles, responsive design

## Features

- Contact form with modal dialog (`<dialog>` native element)
- Server-side email sending via Resend API
- Bilingual (English / Spanish) with client-side language toggle
- Dark mode only (forced `theme-dark` at HTML level)
- Fully responsive (mobile-first)
- Social links: GitHub, LinkedIn, Instagram

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables and fill them in
cp .env.example .env
```

Required environment variables (see `.env.example`):

| Variable         | Description                            |
| ---------------- | -------------------------------------- |
| `RESEND_API_KEY` | Your Resend API key                    |
| `FROM_EMAIL`     | Sender email (use `onboarding@resend.dev` for dev) |
| `TO_EMAIL`       | Where contact messages arrive          |

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # Astro components (Nav, Hero, ContactCTA, etc.)
├── layouts/        # BaseLayout with i18n script and theme
├── pages/          # Routes: index, work, about
│   └── api/        # API route: /api/contact
├── i18n/           # Translation files (EN/ES)
├── styles/         # Global CSS and variables
└── content/        # Work projects (Markdown)
```

## Deployment

The project is configured for Vercel with the `@astrojs/vercel` adapter (serverless mode). Connect the GitHub repo to Vercel and add the environment variables in the Vercel dashboard.

---

Built with ❤️ by [GreeDev](https://github.com/GreeDev21)
