import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  ellipse: {
    main: '#fb7c2f',
    primary: 'rgba(251, 124, 47, 0.2)',
  },

  device: {
    mobile: '320px',
    tab: '768px',
    desktop: '1280px',
  },

  font: {
    color: {
      main: '#000',
      secondaryMain: 'rgba(82, 85, 95, 0.7)',
      secondary: '#52555F',
      selected: '#FFF',
    },

    size: {
      small: '10px',

      normal: '12px',
      normalBig: '14px',

      large: '',
    },

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '14px',
    letterSpacing: '0.04em',
  },

  background: {
    body: '#FFF',

    header: '#FFF',
    banner: '#f5f6fb',
    signIn: '#FFF',
    table: '#FFF',
  },

  controller: {
    input: {
      color: {
        main: '#F6F7FB',
        selected: '',
        active: '',
        secondary: '#c7ccdc',
      },

      background: {
        main: '#F5F6FB',
        selected: '',
        active: '',
        secondary: '',
      },

      border: {
        main: '#F6F7FB',
        selected: '#FF751D',
        active: '#F5F6FB',
        secondary: '#FFF',
      },
    },

    button: {
      color: {
        main: '',
        selected: '#FFF',
        selectedSecondary: '#FF751D',
        active: '#FF751D',
        secondary: '#000',
      },

      background: {
        main: '#F5F6FB',
        selected: '#FF751D',
        active: '',
        secondary: '',
      },

      border: {
        main: '',
        selected: '',
        active: '',
        secondary: '#f6f7fc',
      },
    },
  },
};
