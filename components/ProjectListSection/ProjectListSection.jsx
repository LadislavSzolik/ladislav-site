import Image from "next/image";
import React from "react";
import style from "./ProjectListSection.module.scss";

import OOOFERAppPreviewImages from "../../public/assets/projects/oooferApp/OOOFERAppPreviewImages.png";
import CSXBankingImages from "../../public/assets/projects/csxBankingApp/CSXBankingImages.png";
import CSPaymentsHeroImage from "../../public/assets/projects/csPayments/CSPaymentsHeroImage.png";
import LinkButton from "../LinkButton/LinkButton";
function ProjectListSection(props) {
  return (
    <>
      <div className={style.header}>
        <h4>Projects</h4>
      </div>
      <ProjectPreview
        title="CSX App"
        desc="Redesign the mobile banking app for private clients."
        href="/projects"
      >
        <Image src={CSXBankingImages} alt="Image" width="800" height="569" />
      </ProjectPreview>
      <ProjectPreview
        title="Payments"
        alignTitle="left"
        desc="Redesign Swiss payment entry flows for private and business clients."
        grayBackground={true}
        href="/projects"
      >
        <Image src={CSPaymentsHeroImage} alt="Image" width="570" height="386" />
      </ProjectPreview>
    </>
  );
}

export default ProjectListSection;

function ProjectPreview({
  title,
  alignTitle = "top",
  desc,
  grayBackground = false,
  href,
  children,
}) {
  const styles = [style.projectPreview];

  if (alignTitle == "left") {
    styles.push(style.alignLeft);
  }

  if (grayBackground) {
    styles.push(style.grayBackground);
  }
  return (
    <div className={styles.join(" ")}>
      <div className="innerContainer">
        <div className="titleBlock">
          <h2>{title}</h2>
          <p>{desc}</p>
          <LinkButton target={href} title="Show" />
        </div>
        {children}
      </div>
    </div>
  );
}
