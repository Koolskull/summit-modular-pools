import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei'
import Pool from './Pool'
import './ProductViewer.css'

interface Product {
  id: string
  name: string
  description: string
  color: string
}

interface ProductViewerProps {
  product: Product
}

function ProductViewer({ product }: ProductViewerProps) {
  // Determine pool size based on product
  const getPoolDimensions = () => {
    switch (product.id) {
      case 'pool-small':
        return { width: 4, length: 2.5, depth: 1.5 }
      case 'pool-medium':
        return { width: 7, length: 3.5, depth: 1.8 }
      case 'pool-large':
        return { width: 11, length: 4.5, depth: 2 }
      default:
        return { width: 7, length: 3.5, depth: 1.8 }
    }
  }

  const dimensions = getPoolDimensions()

  return (
    <div className="canvas-container">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[10, 8, 10]} fov={50} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, 10, -10]} intensity={0.5} />

        {/* Pool model */}
        <Pool 
          dimensions={dimensions} 
          color={product.color}
        />

        {/* Ground shadow */}
        <ContactShadows
          position={[0, -0.01, 0]}
          opacity={0.4}
          scale={30}
          blur={2}
          far={4}
        />

        {/* Environment for realistic reflections */}
        <Environment preset="city" />

        {/* Camera controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={30}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </div>
  )
}

export default ProductViewer

