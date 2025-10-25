import { Button } from "@chakra-ui/react";
import "./styles.css";

interface HeroProps {
  heading: string;
}

export const Hero = ({ heading }: HeroProps) => {
  return (
    <section className="hero full-bleed">
      <div className="hero-inner">
        <h2>{heading}</h2>
        <Button size="lg">Explore</Button>
      </div>
    </section>
  );
};
