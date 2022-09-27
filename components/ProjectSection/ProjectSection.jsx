import React from "react";
import LinkButton from "../LinkButton/LinkButton";
import Image from "next/image";
import style from "./ProjectSection.module.scss";

import GreenwiperzHeroImage from "../../public/assets/projects/greenwiperz/GreenwiperzHeroImage.png";
import GlimpseHeroImage from "../../public/assets/projects/glimpse/GlimpseHeroImage.png";
function ProjectSection() {
  return (
    <div className={style.container}>
      <div>
        <h2>Projects</h2>
        <p>Documented design and software engineering work I did.</p>
        <LinkButton target="" title="Coming soon..." />
        <div class={style.projectImages}>
          <Image
            src={GreenwiperzHeroImage}
            alt="Greenwiperz Project Hero Image"
            width={470}
            height={318}
          />
          <Image
            src={GlimpseHeroImage}
            alt="Glimpse project hero image"
            width={470}
            height={318}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
