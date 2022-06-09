import 'styled-components';
import { Colors } from 'theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    containerSize: string;
    fontFamily: {
      primary: string;
    };
    zIndex: {
      heroImage: number;
    };
    color: Record<Colors, string>;
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
  }
}
