import 'styled-components';
import { Colors } from 'theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    containerSize: string;
    borderRadius: {
      base: string | number;
    };
    fontFamily: {
      primary: string;
    };
    zIndex: {
      heroImage: number;
    };
    color: Record<Colors, string>;
    boxShadow: {
      popup: string;
    };
    space: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
    };
    fontSize: {
      textLg: string;
      textBase: string;
      textSm: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
    fontWeight: {
      textLg: string | number;
      textBase: string | number;
      textSm: string | number;
      h1: string | number;
      h2: string | number;
      h3: string | number;
      h4: string | number;
      h5: string | number;
      h6: string | number;
    };
    lineHeight: {
      textLg: string;
      textBase: string;
      textSm: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  }
}
