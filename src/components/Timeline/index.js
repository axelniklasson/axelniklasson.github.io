import React from "react";

import "./style.scss";

const Timeline = ({ items }) => (
  <div className="timeline">
    <div className="arrow" />
    {items.map((el, index) => (
      <div key={index} className="timeline-item">
        <div>
          <p>{el.title}</p>
          <p>{el.subtitle}</p>
        </div>
      </div>
    ))}
    <div className="gradient" />
  </div>
);

export default Timeline;
