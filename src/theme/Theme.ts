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

    button: {
      main: '#F5F6FB',
      active: '#FF751D',
      activeText: '#FFF',
    },

    input: {
      main: '#F6F7FB',
      selected: '#FF751D',

      text: '#A6ABB9',
    },
  },

  controller: {
    selected: ' #FF751D',
  },
};
