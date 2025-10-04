import { useNavigate } from "react-router-dom";

export default function StationPage05() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Trumpeldor Cemetery</h1>
      <p>
        The city’s heart beats loudly in its streets, but here, Witch, it falls
        silent. Among these stones lie the voices that shaped Tel Aviv and the
        Yishuv: the poet Bialik, the dreamer Tchernichovsky, the mayor
        Dizengoff. And here too rests Dr. Haim Arlosoroff.
      </p>
      <p>
        On June 18, 1933, tens of thousands walked these paths for his funeral.
        Some came to mourn, some to accuse, some to protect their names and
        causes. His death did not only break a family; it divided a nation. The
        mystery of who killed him — political enemies, personal rivals, or
        agents of darker powers — was never truly solved.
      </p>
      <p>
        The truth you carry now, Witch, is that history is not only what
        happened, but how it is remembered. The city remembers him in its
        streets, its stories, and its silences. And you, too, have walked the
        path of memory to its end.
      </p>
      <p>
        The rune you have uncovered here does not point to another place. It
        points inward — to hold this story, to share it, and to never let memory
        fade into dust.
      </p>

      <button onClick={() => navigate("/epilogue")}>Continue</button>
    </main>
  );
}
