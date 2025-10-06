import styled from "styled-components";
import textFrame from "../assets/text-frame.png";
import type { ReactNode } from "react";

const Frame = styled.div`
  background-image: url(${textFrame});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 16px 32px;
  text-align: center;
  height: 264px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

interface HeadingProps {
  children: ReactNode;
}

function Heading({ children }: HeadingProps) {
  return (
    <Frame>
      <h1>{children}</h1>
    </Frame>
  );
}

export default Heading;
