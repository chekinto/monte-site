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
    title: "🎯 Tailored Coaching",
    description:
      "Personalized lesson plans designed to match your goals, skill level, and playing style. Every golfer learns differently, that’s why our sessions focus on what truly matters to your game, ensuring steady progress and lasting improvement both on and off the course..",
  },
  {
    icon: GrTarget,
    title: "🎯 Modern Technique",
    description:
      "We blend timeless fundamentals with cutting-edge technology. Using high-speed video, digital swing analysis, and data-driven insights, we help you understand your swing like never before, combining the art of traditional coaching with the precision of modern tools.",
  },
  {
    icon: GrTarget,
    title: "🎯 Game Transformation",
    description:
      "Transform your game through a structured, results-focused approach. Our goal is to help you build confidence, consistency, and control — from tee to green. Whether you’re chasing lower scores or rediscovering the joy of the game, we’ll guide you every step of the way.",
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
            In my coaching, you won’t be asked to twist yourself into impossible
            positions or chase the latest swing fad you saw on YouTube. My
            approach is grounded in solid fundamentals, simple, proven your game
            after years on the course, every lesson is shaped around you, your
            goals, your strengths, and your swing. My mission is
            straightforward: to help you play better golf, feel more confident
            over every shot, and truly enjoy the game you love without
            overcomplicating it.
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

      <section className="section">
        <h1>About Mike</h1>
        <p>
          I am Mike "Monte", your instructor. I will be meeting some of you in
          person and others by video.
        </p>

        <p>
          You will learn the golf swing in it's simplest form, free of being
          conscious of mechanical mental direction that has you paralyzed and
          incapable of achieving an effortless fluid action. You will also learn
          the <strong>mindset</strong> that separates the winners from the rest
          of the field, which in your effort to become your best, the game of
          golf forces you to accomplish.
        </p>
        <p>
          My journey from junior golf through my years as a competing
          professional under the guidance of the legendary "Wild" Bill Mehlhorn,
          and my father, Sal Monte, has taught me much over the past 50 years
          that I want to share with you.
        </p>
        <p>
          Go to the menu tab and explore more information on how I teach as well
          as getting to know who you are entrusting with your game.
        </p>
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
