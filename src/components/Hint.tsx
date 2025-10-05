import React, { useState } from "react";
import styled from "styled-components";

const HintBox = styled.div`
  background-color: #222;
  color: #eee;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  text-align: center;
  margin: 16px 0;
`;

const HintButton = styled.button`
  background-color: #1e076188;
  margin: 8px 0;
  border: 1px solid #1e0761;
`;

function Hint({ children }: { children: React.ReactNode }) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      {!showHint && (
        <HintButton onClick={() => setShowHint(true)}>Hint</HintButton>
      )}
      {showHint && (
        <HintBox>
          <h3>Hint</h3>
          <br />
          <span style={{ fontSize: "1.4rem" }}>{children}</span>
        </HintBox>
      )}
    </div>
  );
}

export default Hint;
