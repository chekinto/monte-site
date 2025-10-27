import { Button } from "@chakra-ui/react";
import "./styles.css";

export const campItinerary = [
  {
    day: 1,
    items: [
      { time: "8:00am - 09:00am", title: "Introduction and Warm Up" },
      { time: "9:00am - 12:00pm", title: "Tee Off: 9-Hole Playing Assessment" },
      {
        time: "12:00pm - 13:30pm",
        title: "Driving Range: Full Swing Fundamentals",
      },
      {
        time: "1:30pm - 14:30pm",
        title: "Chipping, Pitching, Bunker Play",
      },
      { time: "14:30pm - 15:00pm", title: "Break" },
      {
        time: "15:00pm - 16:00pm",
        title: "Putting Green: Style, Reading Greens",
      },
      { time: "16:00pm - 17:00pm", title: "Course Management, Mindset" },
    ],
  },
  {
    day: 2,
    items: [
      {
        time: "9:00am - 11:00am",
        title: "Driving Range: Full Swing Fundamentals",
      },
      {
        time: "11:15am - 13:00pm",
        title: "Chipping, Pitching, Bunker Play",
      },
      { time: "13:00pm - 14:30pm", title: "Specialty Shot Making" },
      { time: "14:30pm - 15:00pm", title: "Break" },
      {
        time: "15:00pm - 16:00pm",
        title: "Putting Green: Style, Reading Greens",
      },
      { time: "16:00pm - 18:00 PM", title: "9-Hole Playing Lesson" },
    ],
  },
  {
    day: 3,
    items: [
      {
        time: "9:00am - 11:00am",
        title: "Driving Range: Full Swing Fundamentals",
      },
      {
        time: "11:15am - 13:00pm",
        title: "Chipping, Pitching, Bunker Play",
      },
      { time: "13:00pm - 14:30pm", title: "Specialty Shot Making" },
      { time: "14:30pm - 15:00pm", title: "Break" },
      {
        time: "15:00pm - 16:00pm",
        title: "Putting Green: Style, Reading Greens",
      },
      {
        time: "16:00pm - 18:00pm",
        title: "Review and Farewell Meeting",
      },
    ],
  },
];

export default function PlayersCampPage() {
  return (
    <>
      <section className="section">
        <h1>Players Camp</h1>
        <p>
          Player camps are located at Chi Chi Rodriguez Golf Club, Clearwater,
          Florida.
        </p>

        <div className="camp__info">
          <h3 className="camp__pricing">$995 per person</h3>
          <p>(Limited to 4 players)</p>
        </div>

        <p>
          In this three day camp, I will assess your overall game and and
          pinpoint your strengths and weaknesses. I will determine what part of
          your game is in need of attention to get you to your very best.
          Breaking 70 is not just about the golf swing. In fact it is more about
          your ability to function and make good decisions under duress. It's
          about using your mind to serve you as opposed to hindering you.{" "}
        </p>

        <p>
          Of course I will discuss 100 year old swing fundamentals that served
          champions for over 100 years, but more importantly, I will teach you
          shots to play when and where that were taught to me by "Wild" Bill
          Mehlhorn, as well as my father, a former tour player and feared{" "}
          <strong>money player</strong>. I will also show you shots I relied on
          when I was competing from junior golf, amateur golf, through
          professional golf. You will be taught short game recovery shots that
          were taught to me by my father, Mr. Mehlhorn, Chico Miartuz, Seve
          Ballesteros, and Joe "Roach" Delancy.
        </p>

        <p>
          Get ready to stop playing <strong>swing</strong> and time playing
          golf. Get out of your head with mechanics and learn how to score{" "}
          <strong>low!</strong>
        </p>
      </section>

      <section className="section">
        <h1>Itinerary</h1>

        {campItinerary.map((i) => (
          <div className="itinerary__container">
            <h2 className="itinerary__day">Day {i.day}</h2>
            {i.items.map((item) => (
              <div className="itinerary__table">
                <p className="time">{item.time}</p>
                <p className="session">{item.title}</p>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section>
        <h1>Reserve your spot now</h1>
        <Button colorPalette="green">
          <a href="">Reserve you spot now</a>
        </Button>
      </section>
    </>
  );
}
