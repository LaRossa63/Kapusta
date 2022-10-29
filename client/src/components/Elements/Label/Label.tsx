import styled from 'styled-components';

export const Label = styled.label<{
  gap?: string;
  justify?: string;
  margin?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify || 'start'};

  margin: ${(props) => props.margin || '0'};
  gap: ${(props) => props.gap || '0'};
`;
