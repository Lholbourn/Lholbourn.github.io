import React from "react";
import "./SkillsCard.css";

export default function SkillsCard(props) {
  return (
    <div className="skills_card">
      <h4 className="skills_card__heading">{props.heading}</h4>
      <p className="skills_card__description">{props.content}</p>
    </div>
  );
}
