import type { DefaultTheme } from 'styled-components';

export enum Colors {
  BLACK = 'black',
  WHITE = 'white',
  BACKGROUND = 'background',
  GREY_LIGHT = 'greyLight',
  ACCENT = 'accent',
  DANGER = 'danger',
}

export const theme: DefaultTheme = {
  containerSize: '1780px',
  borderRadius: {
    base: 0,
  },
  fontFamily: {
    primary: '"Roboto", sans-serif',
  },
  zIndex: {
    header: 50,
    heroImage: -1,
  },
  color: {
    [Colors.BLACK]: '#090910',
    [Colors.WHITE]: '#fff',
    [Colors.BACKGROUND]: '#f9f9f9',
    [Colors.GREY_LIGHT]: '#f8f9fa',
    [Colors.ACCENT]: '#FF7700',
    [Colors.DANGER]: '#d90429',
  },
  boxShadow: {
    popup: '0 5px 10px rgba(0,0,0, 0.23)',
  },
  space: {
    1: '5px',
    2: '10px',
    3: '15px',
    4: '20px',
    5: '25px',
    6: '30px',
    7: '35px',
    8: '40px',
    9: '45px',
    10: '50px',
  },
  fontSize: {
    textLg: '16px',
    textBase: '14px',
    textSm: '12px',
    h1: '32px',
    h2: '28px',
    h3: '24px',
    h4: '22px',
    h5: '18px',
    h6: '16px',
  },
  fontWeight: {
    textLg: 400,
    textBase: 400,
    textSm: 400,
    h1: 700,
    h2: 700,
    h3: 500,
    h4: 500,
    h5: 500,
    h6: 500,
  },
  lineHeight: {
    textLg: '150%',
    textBase: '125%',
    textSm: '125%',
    h1: '125%',
    h2: '125%',
    h3: '125%',
    h4: '125%',
    h5: '125%',
    h6: '125%',
  },
};
