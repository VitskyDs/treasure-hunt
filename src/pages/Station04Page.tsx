import { useState } from "react";

import Input from "../components/Input";
import Instructions from "../components/Instructions";
import Hint from "../components/Hint";
import Riddle from "../components/Riddle";

export default function StationPage04() {
  const [solved, setSolved] = useState(false);

  const handleSubmit = (value: string) => {
    if (value.trim().toLowerCase() === "trumpeldor cemetery") {
      setSolved(true);
    }
  };

  return (
    <main>
      <h1>Habima Square</h1>
      <p>The city turned tragedy into theater.</p>
      <p>
        Here, at Habima, actors embody memory on stage. But after the murder,
        real lives became roles in a national drama. Political rivals hurled
        accusations, suspects were dragged into show trials, and the press fed
        the public a story of shadows, guilt, and suspicion.
      </p>
      <p>
        It was no longer only history. It was performance. And the city watched.
      </p>

      <h2>Extra-sensual riddle</h2>
      <p>
        With the help of the clue and your extra-sensual powers, solve the
        riddle.
      </p>
      <hr />
      <p>Your first clue is this:</p>
      <Riddle>
        But beyond the stage, memory is not acted — it is carved in stone. Seek
        the place where silence keeps the names, where Tel Aviv’s founders and
        dreamers rest. There you will find the truth.
      </Riddle>

      <h2>Your solution</h2>

      {!solved ? (
        <>
          <Input onSubmit={handleSubmit} />
          <Hint>Here lies Arlosoroff, among the city’s first builders.</Hint>
          <Hint>T _ _ _ _ _ _ _ _ _ C _ _ _ _ _ _ _</Hint>
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
    </main>
  );
}
