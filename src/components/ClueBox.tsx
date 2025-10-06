import styled from "styled-components";

const ClueBox = styled.div`
  background: #0f0239;
  border: 3px solid #1f0765;
  border-radius: 6px;
  padding: 1.5rem 2rem;
  margin: 0;
  font-size: 1.4rem;
  color: #c4c4c4;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 150%;
  position: relative;
  letter-spacing: 0.5px;

  &::before {
    content: "✦";
    position: absolute;
    top: 0;
    left: 7px;
    font-size: 1.5rem;
    color: #33158e;
  }

  &::after {
    content: "✦";
    position: absolute;
    bottom: 0px;
    right: 7px;
    font-size: 1.5rem;
    color: #33158e;
  }
`;

export default ClueBox;
