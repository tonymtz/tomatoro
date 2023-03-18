// styled.d.ts
import 'styled-components'

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IPalette {
  main: string;
  contrastText: string;
}

// we'll use a very simple theme with palette and colors
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    borderRadius: string;
    bodyColor: string;
    textColor: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
