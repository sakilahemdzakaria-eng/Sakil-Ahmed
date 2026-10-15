# Sakil Ahmed Zakaria — Campaign Manager & Senior Sales Executive

A modern React & TypeScript web application rewritten from the original static Dynamic site. Built with Vite, Tailwind CSS, and Lucide icons.

## Features

- **Hero & Kinetic Typography**: Marquee ticker and looping hero typography in Anton font, stylized portrait arch, and role badges.
- **Interactive Video Walkthrough**: 4-chapter interactive walkthrough of daily UK restaurant campaign management with timestamps and chapter overviews.
- **Work & Campaign Showcase**: Interactive preview cards showing weekend table fill ads, festive takeaway rushes, and corporate lunch launches.
- **Live Campaign Proof & Lightbox**: Verified Facebook insights with 84.5% UK audience data and zoomable high-resolution campaign screenshots.
- **Define · Design · Deliver Process**: Dynamic 3-step interactive process with color transitions and workflow explanations.
- **UK Restaurant Campaign Planner & ROI Estimator**: Live mathematical model computing estimated monthly campaign revenue, extra weekly tables, and orders based on UK city multipliers, venue types, and marketing goals with direct WhatsApp message formulation.
- **Client Reviews & Credentials**: BA Bangla, English fluency (UK & US) with IELTS 6.0, skill proficiency bars, and restaurant partner reviews.
- **Direct Enquiry Form**: Quick contact form supporting direct WhatsApp dispatch and email generation.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler & Tooling**: Vite 6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Anton & Plus Jakarta Sans

## Development

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Deploying to GitHub Pages

If you see a **blank white page** on GitHub, it is because:
1. GitHub Pages needs the built files (from `npm run build`), not raw `.tsx` files.
2. Assets must be loaded using relative paths (`base: './'`).

### Method 1: Automatic Deployment (Recommended)
This repository includes `.github/workflows/deploy.yml`. When you push your code to GitHub:
1. Go to your repository on GitHub.
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push your code or click the **Actions** tab to run the workflow. Your site will automatically build and publish live!

### Method 2: Manual Deploy from `dist`
1. Run `npm run build`.
2. Push the contents of the `dist` folder to your `gh-pages` branch.