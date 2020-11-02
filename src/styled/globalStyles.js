import { createGlobalStyle } from 'styled-components';
import Roboto from '../../src/assets/fonts/Roboto/Roboto-Light.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face{
    font-family: "Roboto";
    src: url(${Roboto});
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto";
  }
  html{
    scroll-behavior: smooth;
    }
`;

export default GlobalStyles;