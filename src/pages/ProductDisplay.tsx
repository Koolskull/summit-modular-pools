import { useState } from 'react'
import ProductViewer from '../components/ProductViewer'
import './ProductDisplay.css'

interface Product {
  id: string
  name: string
  description: string
  color: string
}

const products: Product[] = [
  {
    id: 'pool-small',
    name: 'Compact Pool',
    description: '15ft x 8ft modular pool - Perfect for small spaces',
    color: '#4A9EED'
  },
  {
    id: 'pool-medium',
    name: 'Standard Pool',
    description: '25ft x 12ft modular pool - Most popular choice',
    color: '#2E86DE'
  },
  {
    id: 'pool-large',
    name: 'Premium Pool',
    description: '40ft x 15ft modular pool - Maximum luxury',
    color: '#1E5F9E'
  }
]

function ProductDisplay() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[1])

  return (
    <div className="product-display">
      <div className="main-content">
        <aside className="sidebar">
          <h2>Our Products</h2>
          <div className="product-list">
            {products.map((product) => (
              <div
                key={product.id}
                className={`product-card ${selectedProduct.id === product.id ? 'active' : ''}`}
                onClick={() => setSelectedProduct(product)}
              >
                <div 
                  className="product-color-indicator" 
                  style={{ backgroundColor: product.color }}
                />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="info-section">
            <h3>Why Choose Modular?</h3>
            <ul>
              <li>Quick installation</li>
              <li>Easy maintenance</li>
              <li>Premium materials</li>
              <li>Customizable design</li>
            </ul>
          </div>
        </aside>

        <main className="viewer-container">
          <div className="viewer-header">
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
          </div>
          <ProductViewer product={selectedProduct} />
          <div className="viewer-controls-info">
            <p>🖱️ Click and drag to rotate • Scroll to zoom • Right-click to pan</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProductDisplay



