import styled from 'styled-components';

export const SecondaryText = styled.p<{ textAlign?: string; margin?: string }>`
  text-align: ${(props) => props.textAlign || 'start'};

  margin: ${(props) => props.margin || '0'};

  color: ${(props) => props.theme.font.color.secondary};
`;
