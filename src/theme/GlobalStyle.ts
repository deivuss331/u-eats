import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { normalize } from 'polished';

export default createGlobalStyle<{ theme: DefaultTheme }>`
  ${normalize()}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  } 

  * {
    &, &:before, &:after {
      box-sizing: inherit;
    }
  }
`;
