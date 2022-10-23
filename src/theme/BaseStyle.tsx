import { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const ResetStyle = createGlobalStyle`

  * {
    font-family: ${(props) => props.theme.fontSize.fontFamily};
    font-style: ${(props) => props.theme.fontSize.fontStyle};
    font-weight: ${(props) => props.theme.fontSize.fontWeight};
    font-size: ${(props) => props.theme.fontSize.fontSize};
    line-height: ${(props) => props.theme.fontSize.lineHeight};
    letter-spacing: ${(props) => props.theme.fontSize.letterSpacing};
  }

  body {
    background-color: ${(props) => props.theme.background.body};
  }

 * {
    padding: 0px;
    margin: 0px;
    border: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }


  aside,
  nav,
  footer,
  header,
  section,
  main {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: inherit;
    font-weight: inherit;
  }

  ul,
  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  input,
  textarea,
  button,
  select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
  }

  input::-ms-clear {
    display: none;
  }

  button,
  input[type='submit'] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
  }

  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  legend {
    display: block;
  }
`;

export const BaseStyle: FC<Props> = ({ children }) => {
  return (
    <>
      <ResetStyle />
      {children}
    </>
  );
};
