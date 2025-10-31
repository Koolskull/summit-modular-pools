# How to Use the Global Navigation Component

## Overview
The Navigation component is a **global, reusable header** that displays your logo and navigation links. It's already set up to work across all pages!

## Current Setup
The Navigation component is already globally applied in `src/App.tsx`:

```tsx
function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />  {/* ← Global navigation appears on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductDisplay />} />
        </Routes>
      </div>
    </Router>
  )
}
```

This means the navigation **automatically appears on every page** defined in the Routes!

## Features
- **Your Logo**: Displays `/public/Logo/logo.svg` in the top-left
- **Clickable Logo**: Logo links back to home page
- **Navigation Links**: 
  - Home (/)
  - 3D Product Viewer (/products)
- **Active State**: Currently selected page is highlighted with black background
- **Responsive**: Adapts to mobile/tablet/desktop

## Adding a New Page with Navigation

### Step 1: Create Your New Page Component
```tsx
// src/pages/NewPage.tsx
import './NewPage.css'

function NewPage() {
  return (
    <div className="new-page">
      <h1>My New Page</h1>
      <p>Your content here...</p>
    </div>
  )
}

export default NewPage
```

### Step 2: Add Route in App.tsx
```tsx
// src/App.tsx
import NewPage from './pages/NewPage'  // Add import

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />  {/* Navigation stays here - it's global! */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductDisplay />} />
          <Route path="/new-page" element={<NewPage />} />  {/* Add route */}
        </Routes>
      </div>
    </Router>
  )
}
```

### Step 3: Add Link to Navigation (Optional)
If you want a link in the nav bar:

```tsx
// src/components/Navigation.tsx
<div className="nav-links">
  <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
    Home
  </Link>
  <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>
    3D Product Viewer
  </Link>
  <Link to="/new-page" className={`nav-link ${location.pathname === '/new-page' ? 'active' : ''}`}>
    New Page  {/* Add your new link */}
  </Link>
</div>
```

## Logo Customization

### Change Logo Size
Edit `src/components/Navigation.css`:

```css
.logo-image {
  height: 50px;  /* Change this value */
  width: auto;   /* Keeps aspect ratio */
  display: block;
}
```

### Replace Logo
Simply replace the file at: `public/Logo/logo.svg`

Or change the path in `Navigation.tsx`:
```tsx
<img src="/Logo/your-new-logo.svg" alt="Your Company" className="logo-image" />
```

## Styling

All navigation styles are in: `src/components/Navigation.css`

Current design:
- White background
- Black borders (2px solid)
- Sticky positioning (stays at top when scrolling)
- Black text with inverted active state
- Hover effects on logo and links

### Example: Change Nav Background
```css
.navigation {
  background: #f5f5f5;  /* Change from white */
  border-bottom: 2px solid #000000;
}
```

## Usage Patterns

### Pattern 1: Global Nav (Current)
Navigation appears on **every** page:
```tsx
<Navigation />  {/* Outside Routes */}
<Routes>
  {/* All pages get navigation */}
</Routes>
```

### Pattern 2: Selective Nav (If Needed)
Navigation only on specific pages:
```tsx
<Routes>
  <Route path="/" element={<><Navigation /><Home /></>} />
  <Route path="/products" element={<><Navigation /><ProductDisplay /></>} />
  <Route path="/no-nav-page" element={<SomePage />} />  {/* No nav here */}
</Routes>
```

### Pattern 3: Different Nav Per Section (Advanced)
```tsx
<Routes>
  <Route path="/admin/*" element={<><AdminNav /><AdminRoutes /></>} />
  <Route path="/*" element={<><Navigation /><PublicRoutes /></>} />
</Routes>
```

## Key Files

- **Component**: `src/components/Navigation.tsx`
- **Styles**: `src/components/Navigation.css`
- **Logo**: `public/Logo/logo.svg`
- **Implementation**: `src/App.tsx`

## Tips

1. **Logo not showing?** 
   - Check the file path is correct: `/Logo/logo.svg`
   - Make sure the file is in the `public` folder
   - Check browser console for errors

2. **Need more nav links?**
   - Add them in the `.nav-links` div in `Navigation.tsx`
   - Don't forget to add the route in `App.tsx`

3. **Logo too big/small?**
   - Adjust `.logo-image height` in `Navigation.css`
   - SVGs scale perfectly at any size

4. **Want a footer too?**
   - Create `src/components/Footer.tsx` the same way
   - Add it to `App.tsx` below `<Routes>`

---

**The Navigation component is already working globally on all your pages!** Any new page you add will automatically have the navigation header with your logo. ✅



