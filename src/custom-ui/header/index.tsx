import Link from "next/link";
import {
  Button,
  CloseButton,
  Drawer,
  IconButton,
  Portal,
  Separator,
} from "@chakra-ui/react";
import { FiAlignRight } from "react-icons/fi";
import {
  AiOutlineTikTok,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import "./styles.css";
import { ROUTES } from "@/constants/routes";

const socialLinks = [
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

export const Header = () => {
  return (
    <Drawer.Root>
      <header className="header">
        <div className="headerInner">
          <Link className="logo" href="/">
            Monte's Golfs
          </Link>

          <nav className="navbar">
            <ul>
              {ROUTES.map(({ path, label }) => (
                <li key={label}>
                  <Link href={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button className="button">Book Lesson</Button>

          <Drawer.Trigger asChild className="trigger">
            <IconButton>
              <FiAlignRight />
            </IconButton>
          </Drawer.Trigger>
        </div>
      </header>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content className="drawer-content">
            <Drawer.Header>
              <Drawer.Title>Navigation</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <div className="drawer-body">
                {ROUTES.map(({ path, label }) => (
                  <li>
                    <Link href={path}>{label}</Link>
                  </li>
                ))}
              </div>
            </Drawer.Body>
            <Separator color={"white"} mb={4} />
            <Drawer.Footer justifyContent="center">
              {socialLinks.map(({ href, icon }) => (
                <a href={href} target="_blank">
                  {icon}
                </a>
              ))}
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="md" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
