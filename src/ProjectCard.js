import React from "react";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="project_card">
      <a href={props.webpage} className="project_card_linkimage">
        <img
          src={props.screenshot}
          alt="project screenshot"
          className="project_card__image"
        />
      </a>
      <div className="project_card__details">
        <h4 className="project_card__heading">
          {props.heading}{" "}
          <a href={props.github} className="project_card__heading_link">
            <i class="fab fa-github-square"></i>
          </a>
        </h4>
        <p className="project_card__description">{props.description}</p>
      </div>
    </div>
  );
}
