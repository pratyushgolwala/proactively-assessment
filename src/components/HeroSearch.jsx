import React from "react";

const leftImages = [
  "/images/left1.png",
  "/images/left2.png",
  "/images/left3.png",
  "/images/left4.png",
];

const rightImages = [
  "/images/right1.png",
  "/images/right2.png",
  "/images/right3.png",
  "/images/right4.png",
];

const mobileImages = [...leftImages, ...rightImages];

function HeroSearch() {
  return (
    <>
      {/* Desktop Images */}
      <div className="hero-images desktop-only">
        <div className="hero-image-col hero-image-col-left">
          {[...leftImages, ...leftImages, ...leftImages].map((src, i) => (
            <div className="hero-image-wrapper" key={`left-${i}`}>
              <img src={src} alt="" className="hero-image" />
            </div>
          ))}
        </div>
        <div className="hero-image-col hero-image-col-right">
          {[...rightImages, ...rightImages, ...rightImages].map((src, i) => (
            <div className="hero-image-wrapper" key={`right-${i}`}>
              <img src={src} alt="" className="hero-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Images */}
      <div className="hero-images-mobile mobile-only">
        <div className="hero-image-row">
          {[...mobileImages, ...mobileImages, ...mobileImages].map((src, i) => (
            <div className="hero-image-wrapper" key={`mobile-${i}`}>
              <img src={src} alt="" className="hero-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Book an appointment with <br />
              <span className="hero-highlight">lifestyle medicine</span> experts
            </h1>
            <p className="hero-subtitle">
              Optimize your lifestyle and reverse chronic diseases.
            </p>
          </div>

          <form className="hero-searchbar">
            <input
              className="hero-input"
              type="text"
              placeholder="Condition, procedure, speciality..."
            />
            <input
              className="hero-input"
              type="text"
              placeholder="City, state, or zipcode"
            />
            <input
              className="hero-input"
              type="text"
              placeholder="Insurance carrier"
            />
            <button className="hero-search-btn" type="submit">
              <span className="hero-search-icon" role="img" aria-label="search">
                🔍
              </span>
              Find now
            </button>
          </form>
        </div>
      </section>

      <div className="hero-gradient-bar"></div>
    </>
  );
}

export default HeroSearch;