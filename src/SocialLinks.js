import React from "react";
import "./SocialLinks.css";

export default function SocialLinks() {
  return (
    <ul className="social_links">
      <li>
        <a
          href="https://www.linkedin.com/in/loki-holbourn/"
          target="_blank"
          rel="noopener noreferrer"
          className="social_links__link"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Lholbourn"
          target="_blank"
          rel="noopener noreferrer"
          className="social_links__link"
        >
          <i className="fab fa-github-square"></i>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/lokih_"
          target="_blank"
          rel="noopener noreferrer"
          className="social_links__link"
        >
          <i className="fab fa-twitter-square"></i>
        </a>
      </li>
    </ul>
  );
}
