import React from 'react';
import styled, { css } from 'styled-components';

import { Avatar, SecondaryText } from 'components/Elements';

const Container = styled.div`
  display: flex;
  align-items: center;

  margin-right: 32px;
`;

const ContainerText = styled.div`
  display: flex;
`;

const SecondaryTextStyled = styled(SecondaryText)<{
  one?: boolean;
  two?: boolean;
}>`
  font-size: ${(props) => props.theme.font.size.normal};

  ${(props) =>
    props.one &&
    css`
      padding-right: 20px;
      border-right: 1px solid #e0e5eb;
    `}

  ${(props) =>
    props.two &&
    css`
      text-decoration-line: underline;
      padding-left: 20px;

      cursor: pointer;
    `}
`;

export const TabDesktop = () => {
  return (
    <Container>
      <Avatar name="M" margin="0 16px 0 0" />
      <ContainerText>
        <SecondaryTextStyled one>User Name</SecondaryTextStyled>
        <SecondaryTextStyled two>Выйти</SecondaryTextStyled>
      </ContainerText>
    </Container>
  );
};
