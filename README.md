# Doma Si — The Warmest Advent in Zagreb

Production-ready Next.js 14 website for Doma Si, featuring a public marketing site with full i18n support (English + Croatian).

## 🎄 Project Overview

- **Public Site**: `www.doma-si.com` — Premium Christmas market brand site
- **Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Languages**: English (EN) + Croatian (HR)
- **Deployment**: Vercel

## 📦 Features

- ✅ Responsive design with mobile-first approach
- ✅ Bilingual support (EN/HR) with dynamic routing
- ✅ Premium brand design tokens (colors, typography, gradients)
- ✅ SEO optimized with metadata, OG tags, and sitemap
- ✅ Contact form with API route (ready for email integration)
- ✅ Accessible (WCAG AA compliant, semantic HTML, ARIA labels)
- ✅ Performance optimized (Lighthouse 95+ target)
- ✅ Content managed via JSON files (easy to edit)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

```bash
# Clone or navigate to project directory
cd doma-si

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000/en](http://localhost:3000/en) to see the site.

## 📁 Project Structure

```
doma-si/
├── app/
│   ├── [locale]/          # Localized routes (en, hr)
│   │   ├── layout.tsx     # Layout with Header/Footer
│   │   ├── page.tsx       # Landing page
│   │   ├── menu/          # Menu page
│   │   ├── program/       # Program page
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact form
│   │   ├── privacy/       # Privacy policy
│   │   └── terms/         # Terms of service
│   ├── api/contact/       # Contact form API
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   ├── globals.css        # Global styles + Tailwind
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # Reusable React components
├── content/               # JSON content files (EN + HR)
│   ├── pages.en.json
│   ├── pages.hr.json
│   ├── program.en.json
│   ├── program.hr.json
│   ├── menu.en.json
│   └── menu.hr.json
├── lib/                   # Utility functions (i18n)
├── public/                # Static assets
│   ├── robots.txt
│   └── img/               # Images, logos, gallery
├── tailwind.config.ts     # Tailwind + brand tokens
├── next.config.mjs        # Next.js config
└── package.json
```

## 🎨 Brand Tokens

All design tokens are centralized in `tailwind.config.ts` and `app/globals.css`:

### Colors
- **Deep Red**: `#A31222` (licitar heart vibe)
- **Warm Gold**: `#D4A351` (candlelight)
- **Winter Blue**: `#0C3A5B` (night/Upper Town)
- **Pine Green**: `#2F5B45` (evergreen)
- **Natural Wood**: `#C9A67A`
- Neutrals: White, Off-White, Charcoal, Soft Gray

### Typography
- **Headings**: Cormorant Garamond (serif, premium)
- **Body**: Inter (sans, readable)
- **Accents**: Montserrat (labels/nav)

## ✏️ Editing Content

Content is stored in JSON files under `/content`:

### Update Copy
Edit `content/pages.en.json` or `content/pages.hr.json` to change:
- Hero headlines
- Section titles
- Navigation labels
- Footer text

### Update Menu
Edit `content/menu.en.json` or `content/menu.hr.json`:
- Add/remove categories
- Update prices
- Change item descriptions

### Update Program
Edit `content/program.en.json` or `content/program.hr.json`:
- Modify weekly schedule
- Update event descriptions

## 📧 Contact Form Setup

The contact form currently logs submissions to console. To enable email:

1. **Install Resend** (or SendGrid, etc.):
   ```bash
   npm install resend
   ```

2. **Add API key** to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```

3. **Update email recipient** in `app/api/contact/route.ts`:
   ```typescript
   const resend = new Resend(process.env.RESEND_API_KEY);
   await resend.emails.send({
     from: 'noreply@doma-si.com',
     to: process.env.CONTACT_EMAIL || 'info@doma-si.com',
     subject: `Contact Form: ${subject}`,
     html: `...`,
     replyTo: email,
   });
   ```

## 🌐 Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Doma Si website"
git remote add origin https://github.com/yourusername/doma-si.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - **Framework**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

4. Add environment variables (if using email/auth):
   - `RESEND_API_KEY`
   - Any other secrets

5. Deploy!

### 3. Custom Domain Setup

#### For www.doma-si.com:

1. In Vercel project settings → Domains
2. Add `www.doma-si.com`
3. In Cloudflare DNS (or your registrar):
   - **Type**: CNAME
   - **Name**: `www`
   - **Target**: `cname.vercel-dns.com`
   - **Proxy**: Disabled (DNS only)

4. Add apex redirect:
   - **Type**: CNAME
   - **Name**: `@` (or leave blank)
   - **Target**: `cname.vercel-dns.com`
   - Or set up a redirect rule in Cloudflare:
     - `doma-si.com` → `https://www.doma-si.com` (301)

#### Verify:
```bash
dig www.doma-si.com
# Should show CNAME pointing to Vercel
```

## 🔒 SSL/HTTPS

Vercel automatically provisions SSL certificates. Once DNS propagates (5-60 minutes), your site will be live with HTTPS.

## 📊 Analytics (Optional)

To add Vercel Analytics:

```bash
npm install @vercel/analytics
```

In `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🎯 Performance Checklist

- ✅ Images: Use Next.js `<Image>` component (already set up)
- ✅ Fonts: Preloaded via `next/font/google`
- ✅ Code splitting: Automatic with Next.js App Router
- ✅ Metadata: SEO tags configured in layouts
- ✅ Sitemap: Auto-generated at `/sitemap.xml`

## 🛠️ TODO for Production

- [ ] Replace placeholder images in `/public/img/gallery/`
- [ ] Add real logo SVG to `/public/img/brand/logo-doma-si.svg`
- [ ] Generate favicon set (use [realfavicongenerator.net](https://realfavicongenerator.net))
- [ ] Integrate email service (Resend/SendGrid) for contact form
- [ ] Test on real mobile devices
- [ ] Run Lighthouse audit (target 95+)
- [ ] Set up Vercel Analytics
- [ ] Configure CSP headers (optional, example in code comments)

## 📞 Support

**Company**: Tu Si Doma j.d.o.o.  
**Address**: Ulica Milislava Demerca 10, Zagreb, Croatia  
**Founded**: October 2, 2024  
**Director**: Marko Pap

## 📝 License

© 2024 Tu Si Doma j.d.o.o. All rights reserved.

---

Built with ❤️ for the warmest Advent in Zagreb.
