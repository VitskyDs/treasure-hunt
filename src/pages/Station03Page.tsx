import { useState } from "react";

import Input from "../components/Input";
import Instructions from "../components/Instructions";
import Hint from "../components/Hint";
import Riddle from "../components/Riddle";
import Main from "../components/Main";
import GemDivider from "../components/GemDivider";
import DropCap from "../components/DropCap";
import Heading from "../components/Heading";

export default function StationPage03() {
  const [solved, setSolved] = useState(false);

  const handleSubmit = (value: string) => {
    if (value.trim().toLowerCase() === "habima square") {
      setSolved(true);
    }
  };

  return (
    <Main>
      <div>
        <Heading>Dizengoff Square</Heading>
        <p style={{ display: "flex", alignItems: "baseline" }}>
          <DropCap letter="T" />
          he fountain turns endlessly, its waters catching fire and light in a
          dance for the city.
        </p>
        <p>
          Here, in the heart of Tel Aviv, memory flows like the streams — always
          moving, always returning.
        </p>
        <p>
          The murder of Arlosoroff also moved in circles: accusations spun
          between parties, rumors splashed through newspapers, and truth was
          lost in the spray. Like the fountain, the case dazzled the public but
          never settled.
        </p>

        <p>
          Here, Witch, you see the city’s reflection: bright, restless, and full
          of secrets.
        </p>
      </div>
      <GemDivider />
      <Riddle>
        <p>
          Where water and fire play for the crowd, the story turns to
          performance. Seek the place where shadows walk the stage, and truth is
          spoken as drama.
        </p>
      </Riddle>
      <GemDivider color="green" />
      <h2>Your solution</h2>

      {!solved ? (
        <>
          <Input onSubmit={handleSubmit} />
          <div className="flex-column">
            <Hint>
              The city’s great stage, where stories are acted and remembered.
            </Hint>
            <Hint>Where you can always get a nice croissant.</Hint>
            <Hint>H _ _ _ _ _ &nbsp; S _ _ _ _ _</Hint>
          </div>
        </>
      ) : (
        <Instructions>
          <div>
            <p>
              You have followed the flow of memory to its stage. The next rune
              awaits where Tel Aviv tells its story in light and shadow — at
              Habima Square.
            </p>
            <p>
              Go now to Habima Square. Look where the audience gathers, facing
              the stage of the nation. There the rune is hidden.
            </p>
          </div>
        </Instructions>
      )}
    </Main>
  );
}
