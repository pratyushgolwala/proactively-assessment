import React from "react";

const leftImages = [
  "/images/left1.jpg",
  "/images/left2.jpg",
  "/images/left3.jpg",
  "/images/left4.jpg",
];
const rightImages = [
  "/images/right1.jpg",
  "/images/right2.jpg",
  "/images/right3.jpg",
  "/images/right4.jpg",
];

function HeroSearch() {
  return (
    <>
      <div className="hero-images">
        <div className="hero-image-col hero-image-col-left">
          {[...leftImages, ...leftImages, ...leftImages].map((src, i) => (
            <div className="hero-image-wrapper" key={i}>
              <img src={src} alt="" className="hero-image" />
            </div>
          ))}
        </div>
        <div className="hero-image-col hero-image-col-right">
          {[...rightImages, ...rightImages, ...rightImages].map((src, i) => (
            <div className="hero-image-wrapper" key={i}>
              <img src={src} alt="" className="hero-image" />
            </div>
          ))}
        </div>
      </div>
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
