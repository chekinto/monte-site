import { Button } from "@chakra-ui/react";
import "./styles.css";

interface HeroProps {
  heading: string;
  description?: string;
}

export const Hero = ({ heading, description }: HeroProps) => {
  return (
    <section className="hero full-bleed">
      <div className="hero-inner">
        <h2>{heading}</h2>
        {description && <p>{description}</p>}
        <Button size="lg" backgroundColor={"teal.700"} color="whitesmoke">
          Schedule lesson
        </Button>
      </div>
    </section>
  );
};
