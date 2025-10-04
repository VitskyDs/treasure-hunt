import React from "react";

type InstructionsProps = {
  children: React.ReactNode;
};

const Instructions: React.FC<InstructionsProps> = ({ children }) => {
  return (
    <div style={{ margin: "16px", padding: "16px" }}>
      <h2>Well done, witch</h2>
      {children}
    </div>
  );
};

export default Instructions;
