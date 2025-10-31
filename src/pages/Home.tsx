import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Summit Modular Pools</h1>
          <h2>Finally, the pool you've always wanted</h2>
          <p className="hero-description">
           Summit Modular Pools is a new concept of portable, durable, flexible and reliable pools for above and below ground installation, with all the features and enjoyment provided by permanent concrete pools plus the convenience and low cost of above ground pools.
          </p>
          <p className="hero-description">
            These modular pools are designed to be easy to install, and easy to maintain.
          </p>
          <br></br>
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
              Here we see the assembly of the modular componenets connected with tubular supports and the installation of the waterproof system. 
            </p>
              {/* <p>
                Here, we can see the installation of tubular metal supports between modules, showing two rubber cords with nuts and bolts tighetning the joints of the modules. After the pool is completely assembled, various decorative finish options can be installed. 
              </p> */}
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

      {/* Customization Section
      <section className="content-section reverse">
        <div className="section-content">
          <div className="image-placeholder">
            <span>[IMAGE - Different pool configurations]</span>
          </div>
          <div className="text-content">
            <h2>Below and Above Ground Installations</h2>
            <p>
             Another feature of this modular pool is the opportunity for installation above and below ground.
            </p>
            <ul className="benefits-list">
              <li>Multiple size options</li>
              <li>Custom color schemes</li>
              <li>Add-on features (spa, waterfall, lighting)</li>
              <li>Deck and landscaping integration</li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* Maintenance Section */}
      <section className="content-section">
        <div className="section-content">
          <div className="text-content">
            <h2>Exclusive Features</h2>
            <ul className="benefits-list">
              <li>Strong Structural Integrity compared to flexible liner pools</li>
              <li>High Density Polyethelane (HDPE) resistant to cracks and extreme temperatures</li>
              <li>No mold build up on interior surface</li>
              <li>Ideal for use with robotic pool cleaners and commonly useed pool equipment, Unlike vinyl membrane liners that will be damaged by these tools</li>
              </ul>
          </div>
          <div className="image-placeholder">
            <span>[IMAGE - Easy maintenance features]</span>
          </div>
        </div>
      </section>


      {/* Testimonial Section
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
      </section> */}

      {/* CTA Section */}
      <section className="cta-section">
        <h2>For more information, please contact us!</h2>
        <p>
          John D. Carpenter - 626-376-8458
          John@JDCpatentlaw.com
        </p>
      </section>
    </div>
  )
}

export default Home

