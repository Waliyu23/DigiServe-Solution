# Digiserve Solutions - Digital Services Marketing Website

A modern, feature-rich marketing website for a digital services company built with Next.js 15, TypeScript, Tailwind CSS, and best practices for performance and SEO.

## Project Structure

- **app/** - Next.js app router and pages
- **components/** - Reusable React components
- **lib/** - Utility functions and configuration
- **public/** - Static assets
- **content/** - MDX files for blog and case studies

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Form Handling:** React Hook Form + Zod
- **Content:** MDX for blog posts and case studies

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## Key Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized (metadata, sitemap, robots.txt)
- ✅ Contact form with validation
- ✅ Service showcase pages
- ✅ Blog and case studies
- ✅ Component library (Button, Card, Badge, Input, Textarea)
- ✅ TypeScript for type safety
- ✅ Dark-themed footer

## Configuration

### Site Settings

Edit `lib/site.ts` to configure:
- Site name and URL
- Contact information
- Social media links
- Legal pages

### Navigation

Edit `lib/nav.ts` to update navbar links and menu structure.

### Services

Edit `lib/services.ts` to add, modify, or remove services with their descriptions and features.

## Content Management

### Blog Posts

Add MDX files to `content/blog/` with frontmatter:
```mdx
---
title: "Article Title"
description: "Brief description"
date: "2025-02-08"
author: "Author Name"
tags: ["tag1", "tag2"]
---

Content here...
```

### Case Studies

Add MDX files to `content/case-studies/` with similar structure.

## API Routes

### Contact Form

**POST** `/api/contact`

Submit contact form data. Currently logs to console; integrate with email service (Resend, SendGrid, etc).

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 000-0000",
  "subject": "Project Inquiry",
  "message": "Message content",
  "service": "software-development"
}
```

## Customization

### Colors

Update Tailwind config in `tailwind.config.ts`:
```ts
colors: {
  primary: '#0066cc',
  secondary: '#ff6b35',
  dark: '#1a1a1a',
}
```

### Fonts

Update in `app/layout.tsx` to add custom fonts via Next.js font optimization.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

- **Netlify:** Push to Git branch, platform auto-deploys
- **AWS Amplify:** Connect GitHub repo for auto-deployment
- **Docker:** Create Dockerfile and deploy as container

## Performance Tips

- Images are optimized via Next.js Image component
- CSS is purged in production (Tailwind)
- Code splitting is automatic
- Static pages are pre-rendered at build time

## SEO

- Meta tags configured per page
- Sitemap auto-generated from `app/sitemap.ts`
- Robots.txt configured in `app/robots.ts`
- Open Graph tags for social sharing
- JSON-LD structured data component available

## Form Submission

To enable email sending, integrate with a service:

1. **Resend** (recommended for Next.js):
   ```bash
   npm install resend
   ```

2. **SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```

3. **AWS SES** or **Nodemailer**

Update `app/api/contact/route.ts` with your email service logic.

## License

MIT

## Support

For issues or questions, contact: inquiry@digiservesolution.com
# DigiServe-Solution
# DigiServe-Solution
