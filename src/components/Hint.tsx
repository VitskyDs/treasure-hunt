import React, { useState } from "react";

function Hint({ children }: { children: React.ReactNode }) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      {!showHint && <button onClick={() => setShowHint(true)}>Hint</button>}
      {showHint && (
        <div>
          <h3>Hint:</h3>
          {children}
        </div>
      )}
    </div>
  );
}

export default Hint;
