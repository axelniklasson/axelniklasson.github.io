import React from "react";

import "./style.scss";

const ExperienceTimeline = ({ items }) => (
  <div className="experience-timeline">
    <div className="arrow" />
    {items.map((el, index) => (
      <div key={index} className="experience-timeline-item">
        <div>
          <img
            src={el.employerLogo}
            alt={el.title}
            onClick={() => window.open(el.employerLink, "_blank")}
          />
          <div className="experience-timeline-item-content">
            <p>{el.title}</p>
            <p>{`${el.employerName}, ${el.timeString}`}</p>
            <p>{el.description}</p>
          </div>
        </div>
      </div>
    ))}
    <div className="gradient" />
  </div>
);

export default ExperienceTimeline;
