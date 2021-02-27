import React from "react";

import Content from "../Content";
import GitHubLogo from "./GitHubLogo";
import "./style.scss";

const PortfolioItem = ({ title, description, link, logo, alignLeft }) => (
  <div className={alignLeft ? "portfolioItem left" : "portfolioItem"}>
    <div className="content">
      <h3>{title}</h3>
      <Content markdown={description} />
    </div>

    <div className="cta" onClick={() => window.open(link, "_blank")}>
      <GitHubLogo />
      <a href={link}>Source code</a>
    </div>
  </div>
);

export default PortfolioItem;
