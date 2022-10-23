import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    ellipse: string;

    device: {
      mobile: string;
      tab: string;
      desktop: string;
    };

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
