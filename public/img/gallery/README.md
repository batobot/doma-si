# Gallery Images

Add high-quality photos of:
- Venue courtyard and atmosphere
- Gastronomy corners (food & drinks)
- Live performances and events
- Holiday decorations and ambiance
- Upper Town setting and views

## Image Specs

- **Format**: JPG or WebP (Next.js will optimize)
- **Size**: 1200px wide minimum (high resolution)
- **Naming**: `placeholder-1.jpg`, `placeholder-2.jpg`, etc.
- **Alt text**: Update in `app/[locale]/page.tsx` gallery section

## Optimization

Next.js Image component will automatically:
- Generate responsive sizes
- Convert to WebP/AVIF
- Lazy load images
- Optimize for Lighthouse performance

Replace placeholder backgrounds in `components/Gallery.tsx` with real images once uploaded.
