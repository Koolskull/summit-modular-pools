# Summit Modular Pools - 3D Product Viewer

A modern React web application built with Vite and Three.js for displaying modular pool products in an interactive 3D environment.

## 🚀 Features

- **Interactive 3D Viewer**: Rotate, zoom, and pan to explore pool products from every angle
- **Multiple Pool Models**: Choose from Compact, Standard, and Premium pool sizes
- **Real-time Rendering**: Powered by Three.js and React Three Fiber for smooth 3D graphics
- **Modern UI**: Beautiful, responsive design with a professional dark theme
- **Product Showcase**: Easy-to-navigate product selection with detailed information
- **Realistic Lighting**: Advanced lighting and shadows for lifelike pool visualization

## 🛠️ Tech Stack

- **React 19** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe development
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers and abstractions for R3F

## 📦 Installation

The project is already set up! Just make sure all dependencies are installed:

```bash
npm install
```

## 🎮 Usage

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Build for Production

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🎨 Features Breakdown

### 3D Product Viewer

- **Orbit Controls**: Click and drag to rotate the camera around the pool
- **Zoom**: Use mouse wheel to zoom in/out
- **Pan**: Right-click and drag to pan the camera
- **Realistic Shadows**: Contact shadows for depth perception
- **Environment Mapping**: Realistic reflections on water surface
- **Animated Water**: Subtle water animation for realism

### Product Selection

- Three pre-configured pool sizes:
  - **Compact Pool**: 15ft x 8ft - Perfect for small spaces
  - **Standard Pool**: 25ft x 12ft - Most popular choice
  - **Premium Pool**: 40ft x 15ft - Maximum luxury
- Color-coded indicators for easy identification
- Smooth transitions between products

### Responsive Design

- Desktop-optimized layout with sidebar navigation
- Tablet and mobile responsive design
- Touch-friendly controls for mobile devices

## 📁 Project Structure

```
Summit Modular Pools/
├── src/
│   ├── components/
│   │   ├── Pool.tsx              # 3D pool model component
│   │   ├── ProductViewer.tsx     # 3D scene and camera setup
│   │   └── ProductViewer.css     # Viewer styling
│   ├── App.tsx                   # Main application component
│   ├── App.css                   # Application styling
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── index.html                    # HTML entry point
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## 🎯 Customization

### Adding New Pool Models

Edit `src/App.tsx` to add new products:

```tsx
const products: Product[] = [
  {
    id: 'your-pool-id',
    name: 'Your Pool Name',
    description: 'Your description',
    color: '#HexColor'
  },
  // ...
]
```

Update `src/components/ProductViewer.tsx` to handle new pool dimensions:

```tsx
const getPoolDimensions = () => {
  switch (product.id) {
    case 'your-pool-id':
      return { width: X, length: Y, depth: Z }
    // ...
  }
}
```

### Changing Colors

Modify the color scheme in the CSS files:
- `src/App.css` - Main application colors
- `src/index.css` - Global theme colors

### Adjusting 3D Scene

Edit `src/components/ProductViewer.tsx`:
- Camera position and FOV
- Lighting intensity and positions
- Environment preset
- Orbit control limits

## 🌟 Future Enhancements

Ideas for extending the application:

- Add more pool accessories (ladders, diving boards, etc.)
- Implement texture selection for pool surfaces
- Add measurement tools
- Create a pool configurator with custom dimensions
- Integrate with a backend for saving configurations
- Add AR (Augmented Reality) view for mobile
- Include cost calculator
- Add photo-realistic rendering mode

## 📝 Notes

- The 3D models are created programmatically using Three.js geometries
- For production, consider optimizing by using GLB/GLTF models instead
- The water animation is subtle for performance - can be enhanced if needed
- All measurements are in meters in the 3D scene

## 🤝 Contributing

This is a project for Summit Modular Pools. For any customizations or improvements, feel free to modify the code as needed.

## 📄 License

Private project for Summit Modular Pools.

---

Built with ❤️ using React, Vite, and Three.js



