import styled from 'styled-components';

export const Label = styled.label<{ gap?: string }>`
  display: flex;
  align-items: center;

  gap: ${(props) => props.gap || '0'};
`;
