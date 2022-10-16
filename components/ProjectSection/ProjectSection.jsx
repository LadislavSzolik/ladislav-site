import React from "react";
import style from "./ProjectSection.module.scss";
import ProjectList from "../ProjectList/ProjectList";
function ProjectSection() {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <h2>Projects</h2>
        <ProjectList />
      </div>
    </div>
  );
}

export default ProjectSection;
