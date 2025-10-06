import React from "react";
import styled from "styled-components";

type InstructionsProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  padding: 24px;
  background-color: #121212;
  border: 1px solid #321098;
  border-radius: 6px;
  box-shadow: 0 2px 12px rgba(60, 2, 83, 0.8);
  text-align: center;
`;

const Instructions: React.FC<InstructionsProps> = ({ children }) => {
  return (
    <Container>
      <h3>Well done, witch</h3>
      <br />
      {children}
    </Container>
  );
};

export default Instructions;
