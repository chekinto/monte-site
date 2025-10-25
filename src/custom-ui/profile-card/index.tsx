import { Teacher } from "@/constants/teachers";
import Image from "next/image";
import "./styles.css";

export const ProfileCard = ({ heading, imgSrc, achievements }: Teacher) => {
  return (
    <div className="profile-card">
      <header className="avatar">
        <Image src={imgSrc} alt={heading} width={48} height={48} />
      </header>

      <div className="profile-content">
        <h6>{heading}</h6>
        <ul>
          {achievements.map((achievement) => (
            <li>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
