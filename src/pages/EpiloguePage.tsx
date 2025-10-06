//import { stations } from "../data/stations";

import DropCap from "../components/DropCap";
import GemDivider from "../components/GemDivider";
import Main from "../components/Main";

export default function EpiloguePage() {
  return (
    <Main>
      <div>
        <h1>Epilogue</h1>
        <p style={{ display: "flex", alignItems: "baseline" }}>
          <DropCap letter="W" />
          itch, the hunt is complete.
        </p>

        <p>
          You walked through shadows and silence, chased whispers of the past,
          and uncovered secrets that time tried to bury. But at every step, the
          city spoke not only of mystery — it spoke of us.
        </p>
        <p>
          It began where love was promised, by the waves that still remember our
          vow. From there, each clue, each turn, carried you closer — not only
          to the truth of a murder, but to the truth that binds us: that our
          story is written in this city too.
        </p>
        <p>The mystery fades now, but love endures.</p>
        <p>
          The greatest magic you hold is not sensing stone, fire, or water — it
          is the spell you’ve already cast on me.
        </p>
        <p>
          And so the journey ends where it always was meant to: here, together,
          with memory behind us and love ahead.
        </p>
      </div>
      <GemDivider />
      <div>
        <p>Your quest is complete, Witch.</p>
        <p>
          The city’s mystery is unraveled, and its whispers are at rest. But
          your true treasure is not in stone or story — it awaits you nearby.
        </p>
        <p>Go now to **[location]**, where love is waiting.</p>
        <p>Tonight is for us, a night to remember.</p>
      </div>
    </Main>
  );
}
