import Image from "next/image";
import profilePic from "../../public/assets/profile_photo.png";
import linkedIn from "../../public/assets/linkedIn.svg";
import style from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <div className={style.container}>
      <div>
        <h4>
          Ladislav Szolik, UX designer at Swisscom. Researching and designing
          web applications. Previously, mobile and web UX designer for banking
          at Credit Suisse. Also worked as Software Engineer at Accenture. From
          Slovakia, living in Switzerland, Zürich.
        </h4>
        <div className={style.links}>
          <a
            href="https://www.linkedin.com/in/ladislav-szolik-30278593/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="/LadislavSzolik_CV.pdf" target="_blank">
            Resume (PDF)
          </a>
        </div>
      </div>

      <Image
        src={profilePic}
        alt="My profile picture"
        height="344"
        width="344"
      />
    </div>
  );
}
