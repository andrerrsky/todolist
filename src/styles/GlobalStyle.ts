import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
    }

    html,
    body,
    #__next {
      position: relative;
      height: 100%;
    }

    body {
      background-color: "#ffffff";
      font-family: "Product Sans", Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizelegibility;
    }

    button,
    input {
      border: 0;
      font-family: "Galano Grotesque Alt", Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      outline: 0;
      text-rendering: optimizelegibility;
    }

    .grecaptcha-badge {
      visibility: hidden;
    }
`;

export default GlobalStyle;
