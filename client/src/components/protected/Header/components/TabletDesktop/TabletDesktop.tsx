import React from 'react';
import styled, { css } from 'styled-components';

import { Avatar, SecondaryText } from 'components/Elements';
import { useHeaderLogout } from 'hooks/Auth';

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

export const TabletDesktop = () => {
  const { handleClickLogout, currentName } = useHeaderLogout();

  return (
    <Container>
      <Avatar name={currentName} margin="0 16px 0 0" />
      <ContainerText>
        <SecondaryTextStyled one>{currentName}</SecondaryTextStyled>

        <SecondaryTextStyled two onClick={handleClickLogout}>
          Выйти
        </SecondaryTextStyled>
      </ContainerText>
    </Container>
  );
};
