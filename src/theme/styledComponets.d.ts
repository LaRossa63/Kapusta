import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
    };

    fontSize: {
      main: string;
      secondary: string;
      selected: string;

      fontFamily: string;
      fontStyle: string;
      fontWeight: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };

    background: {
      body: string;

      header: string;
    };
  }
}
