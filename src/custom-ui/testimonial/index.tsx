import { Avatar } from "@chakra-ui/react";
import "./styles.css";
export interface Testimonial {
  student: string;
  date?: string;
  lessonType?: string;
  review: string;
}

export const Testimonial = ({
  student,
  date,
  lessonType,
  review,
}: Testimonial) => {
  return (
    <div className="testimonial">
      <header>
        <Avatar.Root>
          <Avatar.Fallback></Avatar.Fallback>
        </Avatar.Root>
        <span>{student}</span>
      </header>

      <div>
        <span>
          {lessonType && `${lessonType} `}
          {date && `- ${date}`}
        </span>
      </div>

      <div>
        <p>{review}</p>
      </div>
    </div>
  );
};
