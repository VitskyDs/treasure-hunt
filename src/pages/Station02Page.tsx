import { useState } from "react";

import Input from "../components/Input";
import Instructions from "../components/Instructions";
import Hint from "../components/Hint";
import Riddle from "../components/Riddle";
import Main from "../components/Main";
import GemDivider from "../components/GemDivider";
import DropCap from "../components/DropCap";

export default function StationPage02() {
  const [solved, setSolved] = useState(false);

  const handleSubmit = (value: string) => {
    if (value.trim().toLowerCase() === "dizengoff square") {
      setSolved(true);
    }
  };

  return (
    <Main>
      <div>
        <h1>Cafe Daisy</h1>
        <p style={{ display: "flex", alignItems: "baseline" }}>
          <DropCap letter="H" />
          ere the city speaks in names.
        </p>

        <p>
          Ibn Gabirol was a poet, a seeker of truth, who lived a thousand years
          before these streets were laid. He wrote of wisdom, of life’s fleeting
          nature, and of justice that outlives the body.
        </p>
        <q>
          Who shall utter Thy mighty deeds, For Thou madest a division of the
          ball of the earth into twain, half dry land, half water, And didst
          surround the water with the sphere of air…
        </q>
        <p>
          On this very shoreline, two men appeared. A brief exchange, a flash, a
          shot — and Arlosoroff fell. His wife cried for help, but the killers
          melted into darkness.
        </p>
        <p>
          Arlosoroff, too, dealt in words — speeches, letters, visions for a
          people in peril. Words that stirred passion and anger alike. Here, at
          this crossing of names, poetry meets politics, and memory lingers like
          an echo.
        </p>
      </div>
      <GemDivider />
      <Riddle>
        <>
          <p>
            Ibn Gabirol saw the world in elements: half land, half water, all
            held in air.
          </p>
          <p>
            Listen now: water divides, holds, surrounds — and it is where voices
            gather and truths reflect.
          </p>
          <p>
            The next rune awaits where water dances in circles and people pause
            to see its ripple.
          </p>
        </>
      </Riddle>

      <GemDivider color="green" />

      <h2>Your solution</h2>

      {!solved ? (
        <>
          <Input onSubmit={handleSubmit} />
          <div className="flex-column">
            <Hint>A circle of life, with water at its heart.</Hint>
            <Hint>Where people enjoy themselves, all days of the week.</Hint>
            <Hint>D _ _ _ _ _ _ f f &nbsp; S _ _ _ _ _</Hint>
          </div>
        </>
      ) : (
        <Instructions>
          <>
            <p>
              You have sensed the city’s voice. The next rune awaits where Tel
              Aviv gathers in a circle, and water dances with fire — at
              Dizengoff Square.
            </p>
            <p>
              Go to Dizengoff Square. Find the fountain that spins and sings.
              The rune lies where the watchers stand to see its colors.
            </p>
          </>
        </Instructions>
      )}
    </Main>
  );
}
