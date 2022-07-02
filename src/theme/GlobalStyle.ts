import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { normalize } from 'polished';

export default createGlobalStyle<{ theme: DefaultTheme }>`
  ${normalize()}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.color.background};
    overflow-x: hidden;
    color: ${({ theme }) => theme.color.black};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize.textBase};
    font-weight: ${({ theme }) => theme.fontWeight.textBase};
    line-height: ${({ theme }) => theme.lineHeight.textBase};
  }
  
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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
    margin: 0;
  }
  
  ul {
    padding-left: 0;
    list-style-type: none;
    margin: 0;
  }
  
  a {
    &,
    &:hover,
    &:focus {
      text-decoration: none;
      color: ${({ theme }) => theme.color.accent};
    }
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSize.h1};
    font-weight: ${({ theme }) => theme.fontWeight.h1};
    line-height: ${({ theme }) => theme.lineHeight.h1};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
    font-weight: ${({ theme }) => theme.fontWeight.h2};
    line-height: ${({ theme }) => theme.lineHeight.h2};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
    font-weight: ${({ theme }) => theme.fontWeight.h3};
    line-height: ${({ theme }) => theme.lineHeight.h3};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.h4};
    font-weight: ${({ theme }) => theme.fontWeight.h4};
    line-height: ${({ theme }) => theme.lineHeight.h4};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSize.h5};
    font-weight: ${({ theme }) => theme.fontWeight.h5};
    line-height: ${({ theme }) => theme.lineHeight.h5};
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSize.h6};
    font-weight: ${({ theme }) => theme.fontWeight.h6};
    line-height: ${({ theme }) => theme.lineHeight.h6};
  }
`;
