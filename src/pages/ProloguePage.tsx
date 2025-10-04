import { useState } from "react";
import Hint from "../components/Hint";
import Input from "../components/Input";
import Instructions from "../components/Instructions";
import Riddle from "../components/Riddle";
import Main from "../components/Main";

export default function ProloguePage() {
  const [solved, setSolved] = useState(false);

  const handleSubmit = (value: string) => {
    if (value.trim().toLowerCase() === "hilton park") {
      setSolved(true);
    }
  };

  return (
    <Main>
      <h1>Prologue</h1>
      <p>
        You are no ordinary wanderer. You are a witch, gifted with the power to
        sense what lies hidden in the air, in stone, in fire, and in water.
        Tonight, the mysterious Vitsky calls upon you. A crime was committed
        long ago in this very city of Tel Aviv, a murder that shook the people
        and still whispers unanswered questions.
      </p>
      <p>
        Your task: to uncover the truth that has eluded so many using your
        extra-sensory powers. Five stations await you. Each holds a piece of the
        mystery. At each place, you must scan the rune of knowledge (it’s a QR
        code, don’t worry), and use your senses to follow the thread onward. But
        beware: the city speaks only in riddles.
      </p>

      <Riddle>
        Begin where love was committed. Where vows were whispered, and the heart
        was promised. There, the story opens.
      </Riddle>

      <em>Go now witch, the hunt begins!</em>

      <hr />

      {!solved ? (
        <>
          <h2>Your solution</h2>
          <Input onSubmit={handleSubmit} />
          <Hint>H _ _ _ _ _ &nbsp; P _ _ _</Hint>
        </>
      ) : (
        <Instructions>
          “Go now to the lookout where most people pause to watch the waves.
          There, hidden in plain sight, a rune awaits you. Touch it, and the
          mystery will begin.”
        </Instructions>
      )}
    </Main>
  );
}
