import React from "react";
import "./Banner.css";
import SocialLinks from "./SocialLinks";

export default function Banner() {
  return (
    <div className="row banner">
      <div className="col-md-3 col-lg-2 banner__avatar_wrapper">
        <img src="/loki.jpg" alt="Loki Holbourn" className="banner__avatar" />
      </div>
      <div className="col-md-8 col-lg-9">
        <h1 className="banner__title">Loki Holbourn</h1>
        <h3 className="banner__subtitle">Full Stack Web Developer</h3>
      </div>
      <div className="col-md-1">
        <SocialLinks />
      </div>
    </div>
  );
}
