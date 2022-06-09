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
    overflow-x: hidden;
    height: calc(100vh - calc(100vh - 100%));
  } 

  * {
    &, &:before, &:after {
      box-sizing: inherit;
    }
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }
`;
