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
        secondaryMain: string;
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
      table: string;
    };

    controller: {
      input: {
        color: {
          main: string;
          selected: string;
          active: string;
          secondary: string;
        };

        background: {
          main: string;
          selected: string;
          active: string;
          secondary: string;
        };

        border: {
          main: string;
          selected: string;
          active: string;
          secondary: string;
        };
      };

      button: {
        color: {
          main: string;
          selected: string;
          selectedSecondary: string;
          active: string;
          secondary: string;
        };

        background: {
          main: string;
          selected: string;
          active: string;
          secondary: string;
        };

        border: {
          main: string;
          selected: string;
          active: string;
          secondary: string;
        };
      };
    };
  }
}
