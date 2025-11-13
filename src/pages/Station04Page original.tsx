import { useState } from "react";

import Input from "../components/Input";
import Instructions from "../components/Instructions";
import Hint from "../components/Hint";
import Riddle from "../components/Riddle";
import Main from "../components/Main";
import DropCap from "../components/DropCap";
import GemDivider from "../components/GemDivider";
import Heading from "../components/Heading";

export default function StationPage04() {
  const [solved, setSolved] = useState(false);

  const handleSubmit = (value: string) => {
    if (value.trim().toLowerCase() === "trumpeldor cemetery") {
      setSolved(true);
    }
  };

  return (
    <Main>
      <Heading>Habima Square</Heading>

      <div>
        <p style={{ display: "flex", alignItems: "baseline" }}>
          <DropCap letter="T" />
          he city turned tragedy into theater.
        </p>

        <p>
          Here, at Habima, actors embody memory on stage. But after the murder,
          real lives became roles in a national drama. Political rivals hurled
          accusations, suspects were dragged into show trials, and the press fed
          the public a story of shadows, guilt, and suspicion.
        </p>
        <p>
          It was no longer only history. It was performance. And the city
          watched.
        </p>
      </div>

      <GemDivider />

      <Riddle>
        But beyond the stage, memory is not acted — it is carved in stone. Seek
        the place where silence keeps the names, where Tel Aviv’s founders and
        dreamers rest. There you will find the truth.
      </Riddle>

      <GemDivider color="green" />

      <h2>Your solution</h2>

      {!solved ? (
        <>
          <Input onSubmit={handleSubmit} />
          <div className="flex-column">
            <Hint>Here lies Arlosoroff, among the city’s first builders.</Hint>
            <Hint>A nearby place of eternal rest 🪦</Hint>
            <Hint>T r _ _ _ _ _ _ _ r &nbsp; C _ _ _ _ _ r _</Hint>
          </div>
        </>
      ) : (
        <Instructions>
          <div>
            <p>
              he stage has ended, Witch, but the story is not over. The murder
              of Arlosoroff was not only a drama for the living — it became part
              of the nation’s memory. His life and death are now etched in
              stone, where leaders, poets, and visionaries rest side by side. To
              truly uncover the truth, you must go where silence reigns, and
              where the city carved his name into eternity. There lies the final
              piece
            </p>
            <p>Go to Trumpeldor Cemetery, there, the last rune awaits.</p>
          </div>
        </Instructions>
      )}
    </Main>
  );
}
