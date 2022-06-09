import { DefaultTheme } from 'styled-components';

export enum Colors {
  BLACK = 'black',
  WHITE = 'white',
  BACKGROUND = 'background',
}

export const theme: DefaultTheme = {
  containerSize: '1780px',
  fontFamily: {
    primary: '"Roboto", sans-serif',
  },
  zIndex: {
    heroImage: -1,
  },
  color: {
    [Colors.BLACK]: '#212232',
    [Colors.WHITE]: '#fff',
    [Colors.BACKGROUND]: '#f9f9f9',
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
};
