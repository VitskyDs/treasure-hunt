import styled from "styled-components";

const Initial = styled.span`
  font-size: 3rem;
  float: left;
  line-height: 1;
  margin-right: 8px;
  font-family: "Lancelot", cursive;
  color: #d4d4d4;
`;

function DropCap({ letter }: { letter: string }) {
  return <Initial>{letter}</Initial>;
}

export default DropCap;
