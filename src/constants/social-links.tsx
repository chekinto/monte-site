import {
  AiOutlineInstagram,
  AiOutlineTikTok,
  AiOutlineYoutube,
} from "react-icons/ai";

export const socialLinks = [
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
      <AiOutlineYoutube
        color={"var(--bg-primary)"}
        aria-label="instagram"
        size={"var(--icon-sm)"}
      />
    ),
  },
];
