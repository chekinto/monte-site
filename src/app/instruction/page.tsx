import { Button, Card, Separator, Table } from "@chakra-ui/react";
import "./style.css";

const items = [
  { id: 1, time: "08:00am", session: "Introduction & Warm up" },
  { id: 2, time: "09:00am", session: "9 Hole playing assessment" },
  {
    id: 3,
    time: "12:00pm - 13:30pm",
    session: "Driving Range: Full swing assessment",
  },
  {
    id: 4,
    time: "1:30pm - 14:30pm",
    session: "Short Game: Chipping, pitching, bunker play",
  },
  { id: 5, time: "14:30pm - 15:00pm", session: "Break" },
  {
    id: 6,
    time: "15:00pm - 16:00pm",
    session: "Putting Green: Style, Reading greens",
  },
  {
    id: 7,
    time: "16:00pm - 17:00pm",
    session: "Course Management: Mindset",
  },
];

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
      <section className="section">
        <h1>Instruction</h1>
        <p>
          Whether you&apos;re a beginner learning the fundamentals or a seasoned
          player fine-tuning your swing, I offer a range of golf instruction
          tailored to your goals and experience level. My mission is simple — to
          help you play better, feel more confident on the course, and enjoy the
          game you love.
        </p>
        <p>
          We offer a range of types of sessions to help you on your journey.
        </p>
      </section>

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

      <section className="section">
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

        <Button colorPalette={"blue"} margin={"0 auto"}>
          Book now
        </Button>
      </section>

      <section className="section full-bleed">
        <h1>Player's Camp</h1>

        <div className="players-camp">
          <div className="players-card">
            <div>
              <h3>Monte's Golf</h3>
              <p>3 Day Players Camp</p>
              <p>Located at:</p>
              <p>Chi Chi Rodriguez Golf Club</p>
              <p>Clearwater, Florida</p>
              <h4 className="players-camp-price">Only $995pp</h4>
              <p>Limited to 4 players</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
