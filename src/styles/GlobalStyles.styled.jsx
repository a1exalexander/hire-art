import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, button, input, textarea, select {
    font-family: 'Poppins', sans-serif;
  }
`;
