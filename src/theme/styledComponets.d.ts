import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    ellipse: {
      main: string;
      primary: string;
    };

    device: {
      mobile: string;
      tab: string;
      desktop: string;
    };

    font: {
      color: {
        main: string;
        secondary: string;
        selected: string;
      };

      size: {
        small: string;

        normal: string;
        normalBig: string;

        large: string;
      };

      fontFamily: string;
      fontStyle: string;
      fontWeight: string;
      lineHeight: string;
      letterSpacing: string;
    };

    background: {
      body: string;

      header: string;
      banner: string;
      signIn: string;

      button: {
        main: string;
        active: string;
        activeText: string;
      };

      input: {
        main: string;
        selected: string;

        text: string;
      };
    };

    controller: {
      selected: string;
    };
  }
}
