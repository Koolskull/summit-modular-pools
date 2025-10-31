# Project Structure - Summit Modular Pools

## Overview
This project now has TWO pages:
1. **Home Page** (default) - Long scroll marketing page with placeholder content
2. **3D Product Viewer** - Interactive 3D pool display (your original page)

## Navigation
A navigation bar at the top allows switching between:
- **Home** - Marketing/landing page
- **3D Product Viewer** - Interactive pool viewer

## File Structure

```
src/
├── App.tsx                      # Main app with routing
├── App.css                      # Minimal global app styles
├── main.tsx                     # Entry point
├── index.css                    # Global styles (fonts, colors)
│
├── components/
│   ├── Navigation.tsx           # Top navigation bar
│   ├── Navigation.css           # Nav styling
│   ├── Pool.tsx                 # 3D Pool model component
│   ├── ProductViewer.tsx        # 3D scene setup
│   └── ProductViewer.css        # 3D viewer styling
│
└── pages/
    ├── Home.tsx                 # NEW - Home page with scroll sections
    ├── Home.css                 # Home page styling
    ├── ProductDisplay.tsx       # Your original 3D product page (saved)
    └── ProductDisplay.css       # Product display styling
```

## Home Page Sections

The home page (`src/pages/Home.tsx`) contains:

1. **Hero Section** - Large title with hero image placeholder
2. **Introduction** - "What Are Modular Pools?" with image
3. **Benefits** - "Quick & Easy Installation" section
4. **Quality** - "Premium Materials" section
5. **Customization** - "Fully Customizable Design" section
6. **Maintenance** - "Low Maintenance" section
7. **Cost** - "Exceptional Value" section
8. **Environmental** - Three-column grid about sustainability
9. **Testimonials** - Black background section with 3 customer quotes
10. **CTA** - Final call-to-action with buttons

## How to Edit Content

### To Replace Placeholder Text:
1. Open `src/pages/Home.tsx`
2. Find the section you want to edit
3. Replace the Lorem ipsum text with your actual content
4. Save - changes will hot-reload automatically

### To Replace Placeholder Images:
You have two options:

**Option A: Use actual image files**
1. Put images in the `public/` folder (e.g., `public/hero-pool.jpg`)
2. In `Home.tsx`, replace:
   ```tsx
   <div className="image-placeholder">
     <span>[IMAGE - Description]</span>
   </div>
   ```
   With:
   ```tsx
   <img src="/hero-pool.jpg" alt="Description" />
   ```

**Option B: Use online placeholder services**
Replace the placeholder divs with:
```tsx
<img src="https://placehold.co/800x600" alt="Description" />
```

### To Edit Section Headings:
Just find the `<h2>` or `<h3>` tags and change the text.

### To Edit Bullet Lists:
Find the `<ul className="benefits-list">` sections and modify the `<li>` items.

### To Edit Testimonials:
Find `.testimonial-card` sections and update:
- `.testimonial-text` - The quote
- `.testimonial-author` - Customer name/location

## Styling

All styles use:
- **Background**: White (#ffffff)
- **Text**: Black (#000000)
- **Borders**: 2px solid black
- **Font**: Futura (with fallbacks)
- **No shadows, gradients, or rounded corners** (except the 3D viewer keeps colors)

### To Edit Styles:
- **Home page styles**: `src/pages/Home.css`
- **Navigation styles**: `src/components/Navigation.css`
- **Product page styles**: `src/pages/ProductDisplay.css`
- **Global styles**: `src/index.css`

## Development

**Start dev server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

## URLs (in development)

- Home: `http://localhost:5173/`
- 3D Product Viewer: `http://localhost:5173/products`

## Tips for Editing

1. **Don't delete the wrapper divs** - Keep the structure (`<section>`, `<div className="section-content">`, etc.)
2. **Images must maintain aspect ratio** - Adjust CSS if needed
3. **Test on mobile** - All layouts are responsive
4. **Keep navigation** - Don't remove the `<Navigation />` component

## Next Steps

1. Replace all placeholder text with your actual marketing copy
2. Add your product images to replace the placeholders
3. Update testimonials with real customer quotes
4. Adjust button links/actions in the CTA sections
5. Add contact form functionality if needed
6. Customize colors in the 3D product viewer if desired

---

The 3D Product Viewer page is fully preserved and working at `/products` - you can continue to use and edit it later!



