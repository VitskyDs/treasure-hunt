import Main from "../components/Main";
import DropCap from "../components/DropCap";
import GemDivider from "../components/GemDivider";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";

export default function StationPage04() {
  const navigate = useNavigate();

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
        <p>
          On June 18, 1933, tens of thousands walked these paths for his
          funeral. Some came to mourn, some to accuse, some to protect their
          names and causes. His death did not only break a family; it divided a
          nation. The mystery of who killed him — political enemies, personal
          rivals, or agents of darker powers — was never truly solved.
        </p>
      </div>

      <GemDivider />

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
    </Main>
  );
}
