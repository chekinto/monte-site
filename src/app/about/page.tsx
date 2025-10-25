import { Blockquote } from "@chakra-ui/react";
import { Metadata } from "next";

import { myTeachers } from "@/constants/teachers";
import { ProfileCard } from "@/custom-ui";

export const metadata: Metadata = {
  title: "About",
  description: "Monte's description",
};

export default function AboutPage() {
  return (
    <div className="wrapper">
      <h1>About your Instructor​​</h1>
      <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>
        Mike "Monte" Mangiaracina
      </h2>
      <p>
        <span className="italic">A little history</span> so that you can get to
        know my background.
      </p>
      <p>
        Nowadays everyone seems to be an expert in golf, you truly don't want to
        trust just anyone with your game you love so much.​ I'll try to keep it
        as short as possible!
      </p>
      <p>
        I was born in 1964, the son of a tour player, stage name "Sal Monte"
        (Salvatore Mangiaracina). At that time, he was already a student under
        the wings of the legendary "Wild" Bill Mehlhorn, winner of over 21 PGA
        Tour events and named by the great Ben Hogan as the "finest ball striker
        I've ever seen". Fate had it that I inherited Mr. Mehlhorn as my teacher
        as well until his passing in 1989.
      </p>
      <p>
        ​Dad left the tour in 1967 due to his sponsor suddenly passing away. So,
        he loaded up the Oldsmobile station wagon with my mother and two
        siblings and moved us down to Miami Beach, Florida from New York in
        1969. With no sponsor and no job, he supported my mom and my two
        siblings teaching and gambling at the local courses; Normandy Shores CC,
        Bayshore CC, La Gorce CC, Doral CC, Kings Bay CC, Country Club of Miami,
        and a few more of the then famous money game circuit of south Florida.
        With the likes of Joe Izzart, Marty "The Fat Man" Stanovich, Bobby
        Riggs, Jim King, Evil Knievel and many more colorful characters, there
        was plenty of "action" to partake in.
      </p>
      <p>
        It was in these days of adolescence I was unknowingly being groomed and
        exposed to the exciting world of competitive golf... Always with dad,
        watching him drain 6 footers to save the day and get the rent paid.
        There came a time when he could not get any action because he was
        "cleaning up" and had to resort to offering to play someone on one knee
        to get a bet down!
      </p>
      <p>
        I remember "The Fat Man" coming in the pro-shop at Bayshore Golf Course
        on Alton Rd. Miami Beach one morning and throwing down $10,000.00 down
        on the table, "I'm betting on 66, 67, 68,69" Someone was dumb enough to
        take the action, he shot 65 and won a lot of money.
      </p>
      <p>Well, this was my "pool hall" and "misspent youth"!</p>
      <p>
        When ever the tour came down for the "Florida Swing", (The Doral Eastern
        Open, The Jackie Gleason Inverrary Classic, and The Citrus Open), dad
        would take me to the events. I would get to be next to him inside the
        ropes coaching some of his old tour buddies. He spent a lot of time
        coaching his dear friend Chi Chi Rodriguez, where the two of them talked
        about "launch angle" decades before all the technology and begin teeing
        the ball 3 to 4 inches high to catch it on the upswing, as I do till
        this day.
      </p>
      <p>
        Those days came with many benefits if you loved the game as I got to
        watch dad work with Jim Thorpe, John Mahaffey, J.C. Snead, Chip Beck and
        the legendary Seve Ballesterous, and other tour players. I once got to
        play a practice round (9 holes anyway) at Doral CC with Seve as a
        teenager! The foursome was Chi Chi, Seve and David Graham and me...
        great days!
      </p>
      <p>
        Then there were countless days and nights in a trailer in Miami Beach
        watching dad and long time friend and great player Chico Miartuz design
        clubs and work on their own equipment. Chico went on to design equipment
        for Northwestern Golf Company. He was known for designing the "Tomahawk"
        putter, and the "Rake" sand wedge.
      </p>
      <p>
        I was learning the game and was being "baby sat" by "Wild" Bill
        Mehlhorn. Lucky me, the old guy was a stern Dutchman, son of a
        bricklayer who was all business and played no games. When he was a
        teenager, he was working for Harry Vardon at Skokie Country Club in
        Illinois. It was there he also learned to design and build golf clubs,
        all by hand, hickory shafts and hand forged blades. Later in his career
        he would be the one who started numbering the equipment, previous to
        that they were given nick names, such as mashie, mashie niblick, spoon,
        etc.
      </p>
      <p>
        If Bill spoke and you talked back, or did not follow his instruction, he
        would simply turn and start walking away. You had to wait for the next
        day to talk to him again. Happened more than a few times unfortunately.
        Being a man of principal, if he asked you{" "}
        {/* <span className="italic">"what did you shoot?"</span> and you answered,
        <span className="italic">"well I had 3 bogeys and..."</span> He would
        cut you off and say,{" "}
        <span className="italic">
          "I did not ask you how many dam bogeys you had, I said what did you
          shoot!"
        </span>
        , Yikes. */}
      </p>
      <div style={{ margin: "1rem 0" }}>
        <Blockquote.Root>
          <Blockquote.Content cite="Bill Mehlhorn">
            <span className="italic">"what did you shoot?"</span> and you
            answered,
            <span className="italic">"well I had 3 bogeys and..."</span> He
            would cut you off and say,{" "}
            <span className="italic">
              "I did not ask you how many dam bogeys you had, I said what did
              you shoot!"
            </span>
            , Yikes.
          </Blockquote.Content>
          <Blockquote.Caption>
            — <cite>Bill Mehlhorn</cite>
          </Blockquote.Caption>
        </Blockquote.Root>
      </div>
      <p>
        However, besides being decades ahead of the world in regard to using the
        big muscles of a natural pivot to swing the arms, he was especially
        brilliant at knowing how to play the percentages when it came to club
        selection and choice of shot making. Being a champion himself, along
        with a world champion bridge player, master handicapper at the
        racetrack, when Mr. Mehlhorn said "play this kind of shot", you could
        bet he knew it was the highest percentage play to make. When I got older
        and was competing as a professional I always felt I had a 2 or 3 shot
        advantage over the field because of the knowledge he passed to me. ​
      </p>
      <p>
        Dad was no slouch as a player. He was a long hitter, (he won the
        national long drive contest in 1967, beating the famous long hitter
        George Bayer. This was with a ball and driver he borrowed from his then
        roommate on tour Chi Chi Rodriguez. Dad was only a fair putter on tour,
        but when he was in survival mode hustling money games, there was no one
        better.
      </p>
      <p>
        Dad ended up being asked by the Fountainebleau Hotel owner Ben Novak to
        be the director of golf at the newly built Fountainebleau CC in Miami.
        in 1971. It ended up being 36 holes, each over 7,000 yards long,
        boasting a huge grass driving range and tremendous chipping and putting
        green. If you loved golf, and I did, it was pure heaven. All the
        practice balls you could hit, a legend pioneer of the game watching over
        me, and permission to drive golf carts, go fishing and play 2 or 3 balls
        as a single on both courses! Golf brat for sure.
      </p>
      <p>
        By the time I was 16 I was breaking 70, playing money games with adults,
        but I had no idea how I was doing it. (Laughing Out Loud) I was just
        playing golf as mindless as could be, doing what I was taught to do by
        drills that AMAZINGLY manifested a repeating action that I didn't have
        to think much about. That, along with playing the percentages, had me
        suddenly winning junior championships.
      </p>
      <p>
        At 14 Years old I won the South Florida Junior Championship, and at
        sixteen years old, I won the Lake Worth Open (In Palm Beach Florida). I
        did this putting completely unconscious! I remember looking at the hole
        and making a stroke and taking it out of the hole... that's it.! I beat
        all the pro's and college players that day. I remember running to the
        telephone booth to call dad at the club. "dad, I won, I shot 69 and beat
        everyone!" he replied "69? Give me a call when you shoot 62, I know a
        dozen guys who can shoot 69" and hung up on me. Did that hurt? Sure it
        did, but years later I knew he was only trying to get me ready for the
        big show and wanted me to remain humble and teachable.{" "}
      </p>
      <p>
        A great player of the 60's Bobby Shave, who was on the leader board for
        a US Open at one time, was head golf coach at Florida International
        University. He wanted me to play there when I graduated high school. but
        I was trying to get out of town. I told my dad about a man walking up to
        me after following me around the Orange Bowl Junior Golf classic after I
        posted two consecutive 71's after a rough start of 79 and said to me,
        "son, you can do what ever you want to a golf ball can't you..." I said,
        "yes sir I can..." That man was the head coach from Northwestern
        University in Chicago Il., but dad was not having it. I was to stay with
        him in Miami and attend FIU. I did not fair well on the college circuit
        but I managed to win the Dade County Amateur at age twenty in 1984.{" "}
      </p>
      <p>
        At the age of twenty-two Dr. Lou Casset and Mr. Mehlhorn sponsored my
        first of 3 failed attempts at qualifying for the PGA Tour. As much as my
        game was physically ready, mentally I was unable to nail it for the 4
        days in a row of competition at that time. Learning in my adult years I
        have severe A.D.D. and that was not diagnosed in the 80's. Competitive
        rounds at the level of the tour are SEVERELY slow and my brain had a
        hard time with it. Now days, a large percentage of tour players are
        taking Beta Blockers, and other substances to help their nerves to
        focus.{" "}
      </p>
      <p>
        I enjoyed some success on the mini tour, missed Monday qualifying,
        another alternative way of entry on to the tour, by one or 2 shots a
        dozen or so times over the years.
      </p>
      <p>
        I became very respected as a very accurate ball striker, hardly ever
        missing a fairway. However, in this world of professional golf today of
        short rough and lightning fast greens, the premium is on putting. Back
        in the 60's and 70's you could of had a big edge on the field with
        accuracy, and earn a living being a good putter. From the 1990's
        forward, the big drive and greatest putters is what is required, as you
        see these guys hit it all over the lot and win.
      </p>
      <p>
        At any rate, the years passed by, I found my self in 1992 relocated in
        New York by Hurricane Andrew that struck Miami. New York was new
        terrain, elevated greens, with bent grass and putts that broke magically
        up hill toward some hill or mountain! I couldn't really get a grasp of
        this new architecture with the exception of few glimpses of greatness
        here and there. This was extremely different from the flats of Florida,
        the Caribbean and South America, where I spent most of my time competing
        as a professional, and as a junior golfer.
      </p>
      <p>
        Now even though dad said, "if you want to compete and play golf, stay
        out of the golf business..." I went ahead, needing to make money, and
        started teaching. I ended up with a tremendous following in Long Island,
        New York, having had The Mike Mangiaracina Academy of Golf at various
        locations. In 2014 I retired from full time teaching and left my PGA
        membership.
      </p>
      <p>
        I still love golf and sharing what was taught to me. I am now inviting
        golfers from all over the world to get access to everything I know.{" "}
      </p>
      <p>
        I enjoyed a lot of success teaching by sticking to a few simple rules:
      </p>
      <ul>
        <li>Make your teaching easy to understand</li>
        <li>Invent nothing in the way of theories and opinions</li>
        <li>
          Stick to the laws of physics and how the body behaves in most all
          athletic actions.
        </li>
        <li>The most important thing, No quick fixes or band-aids.</li>
        <li>
          Tell the student what they are doing wrong, teach them the cause of
          it, then give them a drill that will fix it without having to mentally
          direct it.
        </li>
        <li>
          Teach them to understand cause and effect so they don't need you. ​
        </li>
      </ul>
      <p>
        There are 50 plus years of experiences and stories I could share, and as
        you can see, I absolutely love to talk about them. I hope to some day
        meet each of you either by phone or in person. I want to help your game
        and pass the information I was so fortunate to receive on to you.
      </p>
      <h3>My Teachers</h3>

      <section className="full-bleed">
        <div>
          {myTeachers.map((teacher) => (
            <ProfileCard {...teacher} />
          ))}
        </div>
      </section>
    </div>
  );
}
