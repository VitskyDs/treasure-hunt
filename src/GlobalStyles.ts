import { createGlobalStyle } from "styled-components";
import background from "../src/assets/app-background.png";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Crimson Pro", serif;
    margin: 0;
    padding: 0;
    color: #d4d4d4ff;
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
  }
  
  h1 {
  font-family: "Metamorphous", cursive;
  font-size: 2.8rem;
  margin: 0 0 16px 0;
  text-align: center;
  }
  
  h2 {
  font-family: "Metamorphous", cursive;
  font-size: 2rem;
  text-align: center;
  margin: 0 0 16px 0;

  }

    h3 {
  font-family: "Metamorphous", cursive;
  font-size: 1.6rem;
  line-height: 125%;
  margin: 4px 0;
  text-align: center;
  }

  p {
    font-size: 1.1rem;
    line-height: 135%;
    letter-spacing: 0.25px;
    margin: 0 0 16px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }

  button {
      background-color: #1e0761;
    color: #e0e0e0;
    border: 1px solid #333;
    
  border-radius: 6px;
  padding: 12px 20px;
  font-size: 1rem;
  font-family: "Crimson Pro", serif;
  cursor: pointer;
  transition: background-color 0.2s ease;
  }

div.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

`;

export default GlobalStyles;
