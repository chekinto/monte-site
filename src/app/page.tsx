import { Marquee, Hero } from "@/custom-ui";
import { Metadata } from "next";
import { GrTarget } from "react-icons/gr";
import "../custom-ui/card/styles.css";

export const metadata: Metadata = {
  title: "Home",
  description: "Monte's description",
};

const features = [
  {
    icon: GrTarget,
    title: "Tailored Coaching",
    description: "Personalized lesson plans for your game.",
  },
  {
    icon: GrTarget,
    title: "Modern Technique",
    description: "Blending traditional skill with digital analysis",
  },
  {
    icon: GrTarget,
    title: "Game Transformation",
    description: "Build confidence, consistency, and control.",
  },
];
export default function Root() {
  return (
    <>
      <Hero heading="Refine Your Swing. Elevate Your Game." />
      <Marquee />

      <section className="section full-bleed">
        <div className="wrapper">
          <h1>Improve Your Game with Expert Coaching</h1>
          <p>
            Whether you’re a beginner learning the fundamentals or a seasoned
            player fine-tuning your swing, I offer a range of golf instruction
            tailored to your goals and experience level. My mission is simple,
            to help you play better, feel more confident on the course, and
            enjoy the game you love.
          </p>
        </div>
      </section>

      <section id="approach" className="section full-bleed">
        <div className="wrapper">
          <h1>Our approach</h1>
          <div className="grid-container">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <header>
                  <feature.icon strokeWidth={1.5} />
                </header>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h1>About Mike</h1>
      </section>

      {/* <section>
        <h1>FAQS</h1>
        <Accordion.Root collapsible>
          <Accordion.Item value={"value-1"}>
            <Accordion.ItemTrigger>
              <span>Quesiton 1</span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Answer </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value={"value-2"}>
            <Accordion.ItemTrigger>
              <span>Quesiton 1</span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Answer </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value={"value-3"}>
            <Accordion.ItemTrigger>
              <span>Quesiton 1</span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Answer </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value={"value-4"}>
            <Accordion.ItemTrigger>
              <span>Quesiton 1</span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Answer </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </section> */}
    </>
  );
}
