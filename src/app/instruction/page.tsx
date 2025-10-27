import {
  Button,
  Card,
  Field,
  Fieldset,
  Input,
  Separator,
  Stack,
  Table,
  Textarea,
} from "@chakra-ui/react";
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

      <section className="section">
        <h1>1-2-1 Lessons</h1>
        <p>
          Tailored 1 on 1 training sessions at The Chi Chis Rodriguez Golf Club
          in Clearwater Florida. From beginners to professionals, covering the
          effortless golf swing based on the principals of Wild" Bill Mehlhorn
          and Sal Monte, short game skills, course strategies, specialty shots
          and mindset training, from a lineage of Tour and "Money Player"
          professionals.
        </p>

        <div>
          <h3>Time Tested Information</h3>
          <p>
            Receive guidance and coaching from a seasoned professional that has
            100 years of knowledge to share from his 25 YR mentor, the legendary
            "Wild" Bill Mehlhorn , His father Sal Monte, and Mikes lifetime of
            Competitive golf that spans over 50 years itself. All at the Chi Chi
            Rodriguez Golf Club and Driving Range. See why some of the greatest
            champions in history trusted Mr. Mehlhorn and Sal Monte with their
            game.
          </p>
        </div>
        <div>
          <h3>Comprehensive Training</h3>
          <p>
            Comprehensive training designed to enhance your performance on the
            course. Develop a solid foundation, Refine your fundamentals, Stop
            playing swing and start playing golf and gain a competitive edge
            under the guidance of a seasoned professional that has 3 generations
            of knowledge to share.
          </p>
        </div>
        <div>
          <h3>Specialized Instruction</h3>
          <p>
            Specialized instruction tailored to meet your specific needs and
            goals. Whether your just starting to build a swing or just wanting
            to polish your existing action, sharpen your short game, or enhance
            your mental approach... my training caters to all skill levels from
            beginners to accomplished competitors and professionals.
          </p>
        </div>
      </section>

      {/* {lessonTypes.map(({ title, description, whoFor }) => (
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
      ))} */}

      <section className="section">
        <h1>Video Analysis</h1>
        <p>
          Send me your video through{" "}
          <a
            href="https://www.snead.app/coach/michael-mangiaracina-2"
            target="_blank"
          >
            Snead.app
          </a>{" "}
          to get started for as little as $29. Tap link below to explore student
          options.
        </p>

        <h4>Beginners to professionals</h4>
        <ol>
          <li>
            Send me a video of your golf swing from directly behind you, on the
            target line, your profile.
          </li>
          <li>
            Send another from facing you directly in line with your ball
            position. (This goes for short shots and putting too)
          </li>
          <li>
            I will review, critique and send back by your preferred method of
            communication, by phone or video, and review with you not just what
            your doing wrong, but I will give you the cause of the error and
            explain & demonstrate a drill to fix it.
          </li>
        </ol>

        <p>
          Drills are necessary because even though you and I may understand the
          explanation, your muscles act independent of your conviction and
          require retraining in many instances. Also, these changes should take
          place with as little as possible mental direction to avoid the dreaded
          paralysis by analysis syndrome. This wipes out any chance of achieving
          fluidity and takes away from the objective of having the muscles
          performing under duress without thought. The mind should bee free to
          focus on flight execution and that's it.​
        </p>

        <Button>Snead App</Button>
      </section>

      <section className="section">
        {lessonTypes.map(({ title, description, whoFor }) => (
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{whoFor}</p>
          </div>
        ))}
      </section>

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

        <Button colorPalette={"blue"} margin={"0px auto"} display={"block"}>
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

        <div>
          <h1>Get in Touch</h1>

          <Fieldset.Root padding={8}>
            <Fieldset.Legend color={"black"}>Contact details</Fieldset.Legend>
            <Fieldset.HelperText>
              Tell me a little bit more about yourself and I'll get back to you
              as soon as possible.
            </Fieldset.HelperText>

            <Fieldset.Content>
              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input name="name" />
              </Field.Root>
              <Field.Root>
                <Field.Label>Contact number</Field.Label>
                <Input name="phone" />
              </Field.Root>

              <Field.Root>
                <Field.Label>Email address</Field.Label>
                <Input name="email" type="email" />
              </Field.Root>
              <Field.Root>
                <Field.Label>Message</Field.Label>
                <Textarea name="message" />
              </Field.Root>
            </Fieldset.Content>

            <Button
              type="submit"
              alignSelf="flex-start"
              colorPalette="blue"
              mt={8}
            >
              Submit
            </Button>
          </Fieldset.Root>
        </div>
      </section>
    </>
  );
}
