import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProloguePage from "./pages/ProloguePage";
import Station01Page from "./pages/Station01Page";
import Station02Page from "./pages/Station02Page";
import Station03Page from "./pages/Station03Page";
import Station04Page from "./pages/Station04Page";
import Station05Page from "./pages/Station05Page";
import EpiloguePage from "./pages/EpiloguePage";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <nav
          style={{
            padding: "1em",
            borderBottom: "1px solid #ccc",
            marginBottom: "1em",
          }}
        >
          <ul
            style={{
              display: "flex",
              gap: "1em",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link to="/">Prologue</Link>
            </li>
            <li>
              <Link to="/hilton-park">Hilton Park</Link>
            </li>
            <li>
              <Link to="/daisy-cafe">Daisy Cafe</Link>
            </li>
            <li>
              <Link to="/dizengoff-square">Dizengoff Square</Link>
            </li>
            <li>
              <Link to="/habima-square">Habima Square</Link>
            </li>
            <li>
              <Link to="/trumpeldor-cemetery">Trumpeldor Cemetery</Link>
            </li>
            <li>
              <Link to="/epilogue">Epilogue</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProloguePage />} />
          <Route path="/hilton-park" element={<Station01Page />} />
          <Route path="/daisy-cafe" element={<Station02Page />} />
          <Route path="/dizengoff-square" element={<Station03Page />} />
          <Route path="/habima-square" element={<Station04Page />} />
          <Route path="/trumpeldor-cemetery" element={<Station05Page />} />
          <Route path="/epilogue" element={<EpiloguePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
