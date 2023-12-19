import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
     
  body {
    background: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_200};
    color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
    font-smooth: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    
    outline: none;
  }

  body::placeholder {
    font-family: 'Roboto', sans-serif,
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
  
  button, a {
    cursor: pointer;
  }
`;
