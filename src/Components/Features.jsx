import "./Features.css";

export default function Features() {
  return (
    <section className="features">
      <h2>Kye Features</h2>

      <div className="features-grid">
        <div className="feature-card">
          <h3>High Quality Audio</h3>
          <p>Experience crystal clear sound with advanced audio engine.</p>
        </div>

        <div className="feature-card">
          <h3>Fast Performance</h3>
          <p>Optimized for smooth and lag-free playback.</p>
        </div>

        <div className="feature-card">
          <h3>Secure Media</h3>
          <p>Your files are protected with secure storage system.</p>
        </div>

        <div className="feature-card">
          <h3>Responsive Design</h3>
          <p>Works perfectly on desktop, tablet, and mobile devices.</p>
        </div>
      </div>
    </section>
  );
}
