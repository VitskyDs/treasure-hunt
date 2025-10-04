import styled from "styled-components";

const ClueBox = styled.div`
  background: #f9f4e7; /* parchment color */
  border: 3px solid #6b4e2a; /* dark brown border */
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin: 2rem 0;
  font-family: "Lancelot", cursive;
  font-size: 1.2rem;
  color: #3b2f2f;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 1.6;
  position: relative;

  &::before {
    content: "✦";
    position: absolute;
    top: -10px;
    left: 10px;
    font-size: 1.5rem;
    color: #6b4e2a;
  }

  &::after {
    content: "✦";
    position: absolute;
    bottom: -10px;
    right: 10px;
    font-size: 1.5rem;
    color: #6b4e2a;
  }
`;

export default ClueBox;
