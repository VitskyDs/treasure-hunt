import type { ReactNode } from "react";
import ClueBox from "./ClueBox";

type RiddleProps = {
  children?: ReactNode;
};

const Riddle = ({ children }: RiddleProps) => {
  return (
    <div>
      <h2>Extra-sensual riddle</h2>
      <p>
        With the help of the clue and your extra-sensual powers, solve the
        riddle.
      </p>
      <br />
      <ClueBox>
        <div>
          <h3>Riddle</h3>
        </div>
        {children}
      </ClueBox>
    </div>
  );
};

export default Riddle;
