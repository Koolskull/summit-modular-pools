import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Summit Modular Pools</h1>
          <h2>The Future of Pool Installation</h2>
          <p className="hero-description">
           Summit Modular Pools is a patented, internationally registered new concept of portable, durable, flexible and reliable pools for above and below ground installation, with all the features and enjoyment provided by permanent concrete pools plus the convenience and low cost of above ground pools.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="hero-video-container">
          <video 
            className="hero-video"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/videos/pool in backyard 1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="content-section">
        <div className="section-content">
          <div className="text-content">
            <h2>What Are Modular Pools?</h2>
            <p>
              The pools are formed by sets of concave, straight and convex modules. When assembled, they create different configurations. 
            </p>
          </div>
          <div className="image-placeholder">
            <span>[IMAGE - Modular pool components]</span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="content-section reverse">
        <div className="section-content">
          <div className="image-placeholder">
            <span>[IMAGE - Pool installation process]</span>
          </div>
          <div className="text-content">
            <h2>Quick & Easy Installation</h2>
            <p>
              Here, we can see the installation of tubular metal supports between any two modules, showing two rubber cords with nuts and bolts tighetning the joints of the modules. After the pool is completely assembled, various decorative finish options can be installed. 
            </p>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="content-section">
        <div className="section-content">
          <div className="text-content">
            <h2>Various Configurations</h2>
            <p>
              These are some of the different pool configurations that can be attained, depending on the type and number of modules.
            </p>
            <ul className="benefits-list">
              <li>"L" Shaped</li>
              <li>Round</li>
              <li>Square</li>
              <li>Triangular</li>
            </ul>
          </div>
          <div className="image-placeholder">
            <span>[IMAGE - Material close-up/quality]</span>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="content-section reverse">
        <div className="section-content">
          <div className="image-placeholder">
            <span>[IMAGE - Different pool configurations]</span>
          </div>
          <div className="text-content">
            <h2>Below and Above Ground Installations</h2>
            <p>
              Example of a below ground installation of an elongated pool configuration. The assembled pool without decorative skirts is lowered in place. All space surrounding the assembly is filled with sand or dirt with the help of a vibrator for compaction.  The filling is filled up to any desired level and finished with your preferred material.
            </p>
            <ul className="benefits-list">
              <li>Multiple size options</li>
              <li>Custom color schemes</li>
              <li>Add-on features (spa, waterfall, lighting)</li>
              <li>Deck and landscaping integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="content-section">
        <div className="section-content">
          <div className="text-content">
            <h2>Physical & Chemical Properties</h2>
            <ul className="benefits-list">
              <li>No mold build up on interior surface</li>
              <li>High Density Polyethelane resistant to cracks and heat</li>
              <li>No liner required</li>
              <li>Chemical, color and UV ray resistant</li>
            </ul>
          </div>
          <div className="image-placeholder">
            <span>[IMAGE - Easy maintenance features]</span>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="content-section reverse">
        <div className="section-content">
          <div className="image-placeholder">
            <span>[IMAGE - Value comparison chart]</span>
          </div>
          <div className="text-content">
            <h2>Exceptional Value</h2>
            <ul className="benefits-list">
              <li>30-50% less than traditional pools</li>
              <li>Lower installation costs</li>
              <li>Reduced long-term maintenance expenses</li>
              <li>Flexible financing options available</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Environmental Section */}
      <section className="content-section">
        <div className="section-content full-width">
          <div className="text-content centered">
            <h2>Environmentally Conscious</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="three-column-grid">
            <div className="grid-item">
              <div className="image-placeholder small">
                <span>[ICON - Water conservation]</span>
              </div>
              <h3>Water Conservation</h3>
              <p>
                Reduced water usage through efficient filtration and minimal evaporation design. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="grid-item">
              <div className="image-placeholder small">
                <span>[ICON - Energy efficiency]</span>
              </div>
              <h3>Energy Efficient</h3>
              <p>
                Advanced pump technology uses 60% less energy than traditional pool systems. 
                Duis aute irure dolor in reprehenderit.
              </p>
            </div>
            <div className="grid-item">
              <div className="image-placeholder small">
                <span>[ICON - Recyclable materials]</span>
              </div>
              <h3>Sustainable Materials</h3>
              <p>
                100% recyclable components made from eco-friendly materials. Excepteur sint 
                occaecat cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Best decision we ever 
              made for our backyard. The installation was quick and the pool is absolutely stunning!"
            </p>
            <p className="testimonial-author">- Customer Name, Location</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The quality 
              exceeded our expectations and the maintenance is so much easier than we imagined."
            </p>
            <p className="testimonial-author">- Customer Name, Location</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Ut enim ad minim veniam, quis nostrud exercitation. We've been enjoying our pool 
              for two years now and it still looks brand new. Highly recommend!"
            </p>
            <p className="testimonial-author">- Customer Name, Location</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Backyard?</h2>
        <p>
          Contact us today for a free consultation and quote. Our team of experts is ready to 
          help you design the perfect modular pool for your space and budget.
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary">Get a Free Quote</button>
          <button className="cta-button secondary">Schedule Consultation</button>
        </div>
      </section>
    </div>
  )
}

export default Home

