# 🚀 Quick Start — Doma Si

Get your site running in **3 commands**:

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
open http://localhost:3000/en
```

That's it! 🎉

---

## 📝 What You'll See

- **Landing page**: Hero, Program, Menu preview, Venue map, Heritage section
- **English/Croatian**: Switch languages in nav (EN/HR)
- **All pages working**: /menu, /program, /contact, /about, etc.

---

## ✏️ Edit Content

All text is in **JSON files** (no code needed):

```bash
# English content
content/pages.en.json     # Landing page sections
content/menu.en.json      # Menu items
content/program.en.json   # Weekly events

# Croatian content  
content/pages.hr.json
content/menu.hr.json
content/program.hr.json
```

Open any file, change text, save — refresh browser to see changes.

---

## 🎨 Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  'deep-red': '#A31222',   // Your red
  'warm-gold': '#D4A351',  // Your gold
  // ...
}
```

---

## 📸 Add Images

1. Add logo: `/public/img/brand/logo-doma-si.svg`
2. Add gallery: `/public/img/gallery/photo-1.jpg`, etc.
3. Add OG image: `/public/og.png` (1200×630px)

Images auto-optimize via Next.js!

---

## 🌐 Deploy to Vercel

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main

# Then:
# 1. Go to vercel.com
# 2. Import your repo
# 3. Click Deploy
# 4. Done! ✅
```

---

## 📧 Enable Contact Form

Uncomment email code in `app/api/contact/route.ts`:

```bash
# Install Resend
npm install resend

# Add API key to .env.local
echo "RESEND_API_KEY=re_your_key" > .env.local
```

Then uncomment the `resend.emails.send()` block in the API route.

---

## 🆘 Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Type errors?**
```bash
npm run build
# Fix any errors shown
```

**Need help?**  
Check `README.md` or `PROJECT-SUMMARY.md` for details.

---

**Happy building! 🎄**
