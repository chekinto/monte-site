import { Button, Card, Separator } from "@chakra-ui/react";

const lessonTypes = [
  {
    title: "Improve Your Game with Expert Coaching",
    description:
      "Whether you&apos;re a beginner learning the fundamentals or a seasoned player fine-tuning your swing, I offer a range of golf instruction tailored to your goals and experience level. My mission is simple to help you play better, feel more confident on the course, and enjoy the game you love.",
    whoFor:
      "Perfect for: golfers of all levels who want focused attention and a personalised development plan.",
  },
  {
    title: "Online Lessons",
    description:
      " Can’t make it to the range? No problem. Send in your swing videos and receive a detailed analysis with voiceover feedback, drills, and custom practice plans all from the comfort of your own home. My online coaching gives you the flexibility to learn anywhere, anytime, and still make consistent improvements.",
    whoFor:
      " Perfect for: busy golfers, international students, or anyone who wants professional guidance remotely.",
  },
  {
    title: "Player Clinics",
    description:
      "Learn, compete, and grow with others. Our small-group clinics combine expert instruction with a fun, social environment. You’ll work on key areas such as ball striking, putting, and course management all while gaining valuable feedback and insights from other players.",
    whoFor:
      "Perfect for: groups, societies, or friends looking to improve together while keeping things relaxed and enjoyable.",
  },
];

export default function InstructionPage() {
  return (
    <>
      <h1>Instruction</h1>
      <p>
        Whether you&apos;re a beginner learning the fundamentals or a seasoned
        player fine-tuning your swing, I offer a range of golf instruction
        tailored to your goals and experience level. My mission is simple — to
        help you play better, feel more confident on the course, and enjoy the
        game you love.
      </p>
      <p>We offer a range of types of sessions to help you on your journey.</p>

      {lessonTypes.map(({ title, description, whoFor }) => (
        <Card.Root colorPalette="gray">
          <Card.Header>
            <h3>{title}</h3>
          </Card.Header>
          <Separator />
          <Card.Body>
            <p>{description}</p>
            <p>{whoFor}</p>
          </Card.Body>
        </Card.Root>
      ))}

      <section>
        <h1>Start your journey</h1>
        <p>
          No two swings are alike and that’s why every program is built around
          you. Whether in person or online, I’ll help you unlock your potential,
          lower your scores, and find more joy in every round.
        </p>

        <p>
          Book your first session today and take the first step toward your best
          golf yet.
        </p>

        <Button colorPalette={"blue"}>Book now</Button>
      </section>
    </>
  );
}
