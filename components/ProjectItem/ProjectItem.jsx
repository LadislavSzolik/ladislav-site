import Image from "next/image";
import React from "react";

import style from "./ProjectItem.module.scss";

function ProjectItem({
  title,
  desc,
  detail1,
  detail2,
  img,
  logo,
  textPosition = "right",
  imgW,
  imgH,
}) {
  let containerClass = style.containerTop;
  let sectionClass = style.sectionTop;

  if (textPosition == "left") {
    containerClass = style.containerLeft;
    sectionClass = style.sectionLeft;
  } else if (textPosition == "right") {
    containerClass = style.containerRight;
    sectionClass = style.sectionRight;
  }
  return (
    <div className={containerClass}>
      <section className={sectionClass}>
        {logo && <Image src={logo} alt="Company logo" height="24" />}
        <h3>{title}</h3>
        <p>{desc}</p>
        {detail1 && <p className={style.detailText}>{detail1}</p>}
        {detail2 && <p className={style.detailText}>{detail2}</p>}
      </section>

      <Image src={img} alt="Design" width={imgW} height={imgH} />
    </div>
  );
}

export default ProjectItem;
