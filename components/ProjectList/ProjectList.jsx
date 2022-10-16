import Image from "next/image";
import React from "react";
import style from "./ProjectList.module.scss";

import CSLogo from "../../public/assets/CS_logo.svg";
import GreenwiperzLogo from "../../public/assets/Greenwiperz_logo.svg";
import oooferLogo from "../../public/assets/ooofer_logo.svg";

import CSXApp from "../../public/assets/projects/CSXBankingImages.png";
import CSPayment from "../../public/assets/projects/CSPaymentsHeroImage.png";
import CSDesignSystem from "../../public/assets/projects/CS_design_system.png";
import GreenImage from "../../public/assets/projects/GreenwiperzHeroImage.png";
import OooferApp from "../../public/assets/projects/OOOFERAppPreviewImages.png";
import OooferPartner from "../../public/assets/projects/ooofer_partner.png";
import Illustrations from "../../public/assets/projects/bestselection.png";

import ProjectItem from "../ProjectItem/ProjectItem";

function ProjectList() {
  return (
    <div className={style.container}>
      <ProjectItem
        title={"CSX App"}
        desc="Redesign the mobile banking app"
        img={CSXApp}
        logo={CSLogo}
        textPosition="top"
      />
      <ProjectItem
        title={"Online payments"}
        desc="Redesign of the payment entry flows for private and business clients."
        logo={CSLogo}
        textPosition="left"
        detail1="Mobile • Tablet • Responsive Web"
        img={CSPayment}
        imgW={650}
        imgH={440}
      />
      <ProjectItem
        title="Banking design system"
        desc="Create a design system in Sketch for online banking."
        logo={CSLogo}
        textPosition="right"
        detail1="Mobile • Tablet • Responsive Web"
        img={CSDesignSystem}
        imgW={650}
        imgH={548}
      />

      <ProjectItem
        title="Booking system"
        desc="Design and develop an online car wash booking system with payments."
        logo={GreenwiperzLogo}
        textPosition="left"
        detail1="Responsive web"
        detail2="Laravel PHP • Tailwind CSS • Datatrans"
        img={GreenImage}
        imgW={650}
        imgH={440}
      />

      <ProjectItem
        title="Booking App"
        desc="Develop a mobile app to book private and open workspaces in hotels for remote workers."
        logo={oooferLogo}
        textPosition="top"
        detail1="React Native • Amazon Web Services (AWS)"
        img={OooferApp}
      />

      <ProjectItem
        title="Partner web"
        desc="Design and develop a responsive web app for partners onboarding."
        logo={oooferLogo}
        textPosition="right"
        detail1="Responsive web"
        detail2="React Native • Amazon Web Services (AWS)"
        img={OooferPartner}
        imgW={640}
        imgH={440}
      />

      <ProjectItem
        title="100 days illustrations"
        desc="To push myself and learn digital illustration, I illustrated 100 different sport throughout 100 days."
        textPosition="top"
        img={Illustrations}
      />
    </div>
  );
}

export default ProjectList;
