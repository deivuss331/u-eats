import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { normalize } from 'polished';

export default createGlobalStyle<{ theme: DefaultTheme }>`
  ${normalize()}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.black};
    font-family: ${({ theme }) => theme.fontFamily.primary};
  } 

  * {
    &, &:before, &:after {
      box-sizing: inherit;
    }
  }
`;
