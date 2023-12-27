import { createGlobalStyle } from 'styled-components';
import { COLORS, SECONDARY_COLORS } from '../constants/colors';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  @font-face {
    font-family: PSVBold;
    src: url('/fonts/PSVSans-Bold.otf');
}
@font-face {
    font-family: PSVRegular;
    src: url('/fonts/PSVSans-Regular.otf');
}
@font-face {
    font-family: PSVCondensed;
    src: url('/fonts/PSVCondensed-Bold.otf');
}
@font-face {
    font-family: PSVBoldItalic;
    src: url('/fonts/PSVBranding-BoldItalic.otf');
}
  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    font-family: PSVRegular;
    height: 100vh;
    width: 100vw;
 background-color:#000;
  
    color: ${COLORS.MAIN};
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

`;

export { GlobalStyles };
