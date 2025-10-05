import type { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Crimson Pro", sans-serif;
`;

type MainProps = {
  children: ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default Main;
