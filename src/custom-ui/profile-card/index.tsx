import { Teacher } from "@/constants/teachers";
import Image from "next/image";
import "./styles.css";
import { Avatar } from "@chakra-ui/react";

export const ProfileCard = ({ heading, imgSrc, achievements }: Teacher) => {
  return (
    <div className="profile-root">
      <header>
        <Avatar.Root size="2xl">
          <Avatar.Image src={imgSrc} />
        </Avatar.Root>
        <h6>{heading}</h6>
      </header>
      {/* <header className="avatar">
        <Image src={imgSrc} alt={heading} width={48} height={48} />
      </header> */}

      <div className="profile-content">
        <ul>
          {achievements.map((achievement) => (
            <li>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
