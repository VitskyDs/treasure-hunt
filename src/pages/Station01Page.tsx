import { useState } from "react";
import Input from "../components/Input";
import Instructions from "../components/Instructions";
import Hint from "../components/Hint";
import Riddle from "../components/Riddle";
import Main from "../components/Main";
import GemDivider from "../components/GemDivider";
import DropCap from "../components/DropCap";
import Heading from "../components/Heading";
import arlosoroff from "../assets/Arlosoroff.png";

export default function StationPage01() {
  const [solved, setSolved] = useState(false);

  const handleSubmit = (value: string) => {
    if (value.trim().toLowerCase() === "daisy cafe") {
      setSolved(true);
    }
  };

  return (
    <Main>
      <div>
        <Heading>Hilton Park</Heading>

        <p style={{ display: "flex", alignItems: "baseline" }}>
          <DropCap letter="T" />
          he sea remembers.
        </p>

        <p>
          Here, where you once spoke words of love, another couple once walked
          in the night. It was June 16, 1933. Dr. Haim Arlosoroff, a leader of
          the Yishuv (the settlement in Israel before there was a state),
          strolled along the beach with his wife, Sima.
        </p>
        <p>
          He had just returned from Europe, where he sought ways to save Jewish
          lives from the gathering storm. His work stirred enemies, and shadows
          followed him.
        </p>
        <p>
          On this very shoreline, two men appeared. A brief exchange, a flash, a
          shot — and Arlosoroff fell. His wife cried for help, but the killers
          melted into darkness.
        </p>
        <img
          style={{ margin: "24px 0" }}
          width="100%"
          src={arlosoroff}
          alt=""
        />
        <p>
          To this day, no one knows for certain who pulled the trigger, or why.
        </p>
        <p>This is the mystery you must unravel.</p>
      </div>

      <GemDivider />

      <Riddle>
        The waves remember, but the light of knowledge is not kept by the sea.
        Seek instead the fire of study, written into the city’s heart — where
        words and flavors once met.
      </Riddle>

      <GemDivider color="green" />

      {!solved ? (
        <>
          <h2>Your solution</h2>
          <Input onSubmit={handleSubmit} />
          <div className="flex-column">
            <Hint>
              Some things are tasty at this place, but no longer available
              there.
            </Hint>
            <Hint>D _ _ _ _ &nbsp; C _ _ _</Hint>
          </div>
        </>
      ) : (
        <Instructions>
          <>
            <p>
              You have read the city’s riddle. The next rune awaits not on the
              shore, but where words once mingled with sweetness — at Cafe
              Daisy.
            </p>
            <p>
              Go now to Cafe Daisy, on the corner of Ibn Gabirol and Arlosoroff.
              Search carefully: the rune is hidden where travelers pause, near
              the tables where stories were once exchanged.
            </p>
          </>
        </Instructions>
      )}
    </Main>
  );
}
