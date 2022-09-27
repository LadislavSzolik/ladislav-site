import Image from "next/image";
import profilePic from "../../public/assets/profile_photo.png";
import style from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <div className={style.container}>
      <div>
        <h1>Ladislav Szolik</h1>
        <h4>User Experience Designer</h4>
        <p>
          Talking to people about their problems, running workshops and
          designing applications.
        </p>
      </div>
      <Image
        src={profilePic}
        alt="My profile picture"
        height="411"
        width="411"
      />
    </div>
  );
}
