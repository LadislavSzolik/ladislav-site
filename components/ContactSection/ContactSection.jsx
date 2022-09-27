import React from "react";
import style from "./ContactSection.module.scss";
function ContactSection() {
  return (
    <div className={style.container}>
      <div>
        <h2>Contact</h2>
        <p>
          Do you have a project in mind, but you need help with the web sites
          and Apps? Are you searching for a senior User Experience designer? Or
          maybe you are getting started in your career and you need somebody to
          expand your perspective?
        </p>
        <a
          href="mailto:szolik.ladislav@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          szolik.ladislav[at]gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/ladislav-szolik-30278593/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/LadislavSzolik"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default ContactSection;
