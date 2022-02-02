import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --background: #fff;
    --fontFamily: 'Titillium Web', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background: var(--background);
    color: #333;
  }

  body {
    font-family: var(--fontFamily);
  }
  ul,li{
    list-style: none;
  }
  p,
  a {
    font-size: 2rem;
  }
`;

export default GlobalStyles;
