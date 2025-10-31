import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()

  return (
    <nav className="navigation">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <img src="/Logo/logo.svg" alt="Summit Modular Pools Logo" className="logo-image" />
        </Link>
        <div className="nav-links">
          <a 
            href="mailto:John@JDCpatentlaw.com" 
            className="nav-link"
          >
            Contact Us
          </a>
          {/* Temporarily hidden for MVP - to be added later with more detail */}
          {/* <Link 
            to="/products" 
            className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}
          >
            3D Product Viewer
          </Link> */}
        </div>
      </div>
    </nav>
  )
}

export default Navigation

