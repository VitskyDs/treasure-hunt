import { useState } from "react";
import Hint from "../components/Hint";
import Input from "../components/Input";
import Instructions from "../components/Instructions";
import Riddle from "../components/Riddle";
import Main from "../components/Main";
import GemDivider from "../components/GemDivider";
import DropCap from "../components/DropCap";
import Heading from "../components/Heading";

export default function ProloguePage() {
  const [solved, setSolved] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (value: string) => {
    if (value.trim().toLowerCase() === "hilton park") {
      setSolved(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Main>
      <div>
        <Heading>Prologue</Heading>
        <p>
          <p style={{ display: "flex", alignItems: "baseline" }}>
            <DropCap letter="H" />
            oa hoa hoa.
          </p>
        </p>
        <p>
          You are no ordinary wanderer. You are a witch, gifted with the power
          to sense what lies hidden in the air, in stone, in fire, and in water.
          Tonight, the mysterious Vitsky calls upon you. A crime was committed
          long ago in this very city of Tel Aviv, a murder that shook the people
          and still whispers unanswered questions.
        </p>
        <p>
          Your task: to uncover the truth that has eluded so many using your
          extra-sensory powers. Five stations await you. Each holds a piece of
          the mystery. At each place, you must scan the rune of knowledge (it’s
          a QR code, don’t worry), and use your senses to follow the thread
          onward. But beware: the city speaks only in riddles.
        </p>
      </div>

      <GemDivider />

      <Riddle>
        Begin where love was committed. Where vows were whispered, and the heart
        was promised. <br /> There, the story opens.
      </Riddle>

      <GemDivider color="green" />

      {!solved ? (
        <div style={{ width: "100%" }}>
          <h2>Your solution</h2>
          <Input onSubmit={handleSubmit} />
          {error && (
            <p style={{ color: "red", marginTop: "0.5rem" }}>
              Incorrect, please try again, oh wicked witch.
            </p>
          )}
          <div className="flex-column">
            <Hint>Where we had our fatefull picnic, all that time ago.</Hint>
            <Hint>H _ _ _ _ _ &nbsp; P _ _ _</Hint>
          </div>
        </div>
      ) : (
        <Instructions>
          <>
            <p>
              Go now to the lookout where most people pause to watch the waves.
              There, hidden in plain sight, a rune awaits you. Touch it, and the
              mystery will begin.
            </p>
            <p>
              <em>Go now witch, the hunt begins!</em>
            </p>
          </>
        </Instructions>
      )}
    </Main>
  );
}
