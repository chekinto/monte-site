"use client";
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
import "./styles.css";
import { socialLinks, ROUTES } from "@/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <header className="header">
        <div className="headerInner">
          <Link className="logo" href="/">
            Monte's Golfs
          </Link>

          <nav className="navbar">
            <ul>
              {ROUTES.map(({ path, label }) => (
                <li key={label} className="nav-link">
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
                  <li key={path}>
                    <a
                      onClick={() => {
                        router.push(path);
                        setOpen(false);
                      }}
                    >
                      {label}
                    </a>
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
