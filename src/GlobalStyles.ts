import { createGlobalStyle } from "styled-components";
import background from "../src/assets/app-background.png";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Crimson Pro", serif;
    margin: 0;
    padding: 0;
    color: #efefef;
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
  }
  
  h1 {
  font-family: "Metamorphous", cursive;
  font-size: 3rem;
  }
  
h2 {
  font-family: "Metamorphous", cursive;
  font-size: 2.4rem;
  }

`;

export default GlobalStyles;
