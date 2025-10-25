import {
  AiOutlineInstagram,
  AiOutlineTikTok,
  AiOutlineYoutube,
} from "react-icons/ai";
import chichiYouth from "../../assets/chichi-youth-foundation.png";
import "./styles.css";
import Image from "next/image";
import { Button, Field, Input } from "@chakra-ui/react";

const socialLinks = [
  {
    href: "http://google.com",
    icon: (
      <AiOutlineInstagram
        color={"var(--bg-primary)"}
        aria-label="instagram"
        size={"var(--icon-sm)"}
      />
    ),
  },
  {
    href: "http://google.com",
    icon: (
      <AiOutlineTikTok
        color={"var(--bg-primary)"}
        aria-label="tiktok"
        size={"var(--icon-sm)"}
      />
    ),
  },
  {
    href: "http://google.com",
    icon: (
      <AiOutlineYoutube
        color={"var(--bg-primary)"}
        aria-label="instagram"
        size={"var(--icon-sm)"}
      />
    ),
  },
];

export const Footer = () => {
  return (
    <footer className="full-bleed">
      <div className="footer-sitemap">
        <div>
          <h5>Sitemap</h5>
          <ul>
            <li>
              <a href="">Link 1</a>
            </li>
            <li>
              <a href="">Link 1</a>
            </li>
            <li>
              <a href="">Link 1</a>
            </li>
            <li>
              <a href="">Link 1</a>
            </li>
            <li>
              <a href="">Link 1</a>
            </li>
            <li>
              <a href="">Link 1</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input placeholder="me@example.com" />
            <Field.ErrorText>This is an error text</Field.ErrorText>
          </Field.Root>
          <Button colorPalette="blue">subscribe</Button>
        </div>
      </div>

      <div className="donate">
        <Image src={chichiYouth} width={400} height={100} alt="" />
        <Button colorPalette={"blue"} size={"xs"} maxWidth={"max-content"}>
          <a
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=MVEZGHFD5Y824&ssrt=1753787732326"
            target="_blank"
          >
            Donate
          </a>
        </Button>
      </div>

      <div className="footer-social">
        {socialLinks.map(({ href, icon }) => (
          <a href={href} target="_blank">
            {icon}
          </a>
        ))}
      </div>

      <div className="copy-right">
        <p>&copy; Monte's Golf. All Rights Reserved</p>
      </div>
    </footer>
  );
};
