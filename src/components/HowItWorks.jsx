import React from "react";

const pillars = [
  {
    label: "Nutrition",
    icomImg: "/images/nutrition2.png",
    statClass: "stat-blue",
    img: "/images/Nutrition.png",
    description:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
  },
  {
    label: "Physical activity",
    icomImg: "/images/physical2.png",
    statClass: "stat-orange",
    img: "/images/Physical.png",
    description:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
  },
  {
    label: "Restorative sleep",
    icomImg: "/images/sleep2.png",
    statClass: "stat-green",
    img: "/images/Sleep.png",
    description:
      "Consistent, quality sleep is essential for optimal brain function and physical health.",
  },
  {
    label: "Stress management",
    icomImg: "/images/stress2.png",
    statClass: "stat-green",
    img: "/images/Stress.png",
    description:
      "Effective stress management techniques are crucial for mental well-being and overall health.",
  },
  {
    label: "Social connection",
    icomImg: "/images/social2.png",
    statClass: "stat-green",
    img: "/images/Social.png",
    description:
      "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
  },
  {
    label: "Substance abuse",
    icomImg: "/images/abuse2.png",
    statClass: "stat-green",
    img: "/images/Abuse.png",
    description:
      "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
  },
];

const tags = [
  "Nutrition",
  "Physical activity",
  "Restorative sleep",
  "Stress management",
  "Social connection",
  "Substance abuse",
];

export default function Working() {
  return (
    <div className="howitworks-section">
      <div className="howitworks-header">
        <div className="howitworks-title">
          <span className="howitworks">HOW IT WORKS</span>
          <h2>
            <span className="howitworks-highlight">Lifestyle as medicine</span>
            <span className="howitworks-normal">: The six pillars</span>
          </h2>
        </div>
        <div className="howitworks-nav desktop-only">
          <button className="howitworks-arrow">&#8592;</button>
          <button className="howitworks-arrow">&#8594;</button>
        </div>
      </div>

      <div className="howitworks-tags desktop-only">
        {tags.map((tag, i) => (
          <button
            key={tag}
            className={`howitworks-tag${i === 0 ? " active" : ""}`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="howitworks-cards">
        {pillars.map((pillar) => (
          <div className="howitworks-card" key={pillar.label}>
            <div className="howitworks-card-img">
              <img src={pillar.img} alt={pillar.label} />
              <div className={`howitworks-stat ${pillar.statClass}`}>
                <img
                  src={pillar.icomImg}
                  alt={`${pillar.label} icon`}
                  className="howitworks-stat-icon"
                />
              </div>
            </div>
            <div className="howitworks-card-content">
              <h3 className="howitworks-card-title">{pillar.label}</h3>
              <p className="howitworks-card-desc">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}