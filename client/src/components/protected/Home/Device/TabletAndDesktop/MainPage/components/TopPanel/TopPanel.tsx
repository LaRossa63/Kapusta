import React from 'react';
import styled from 'styled-components';

import { Button, Label, SecondaryText } from 'components/Elements';
import { GraphIcon } from 'images';
import { useBalance, useNavigateRecord } from 'hooks';

const Container = styled.div`
  height: 44px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 20px;

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    margin-left: 285px;
  }
`;

const ContainerController = styled.div`
  display: flex;
  align-items: center;

  margin-left: 10px;
`;

const SecondaryTextStyled = styled(SecondaryText)`
  font-weight: 500;
  font-size: ${(props) => props.theme.font.size.normal};
  line-height: 14px;
  letter-spacing: 0.02em;

  color: ${(props) => props.theme.font.color.secondaryMain};
`;

const Input = styled.input`
  width: 125px;
  height: 44px;

  border: 2px solid ${(props) => props.theme.controller.input.border.secondary};
  border-radius: 16px;

  margin-left: 21px;
  margin-right: 15px;

  padding: 12px 20px;

  &::placeholder {
    font-weight: 700;
    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: ${(props) => props.theme.font.color.main};
  }
`;

const ButtonStyled = styled(Button)`
  &.MuiButtonBase-root {
    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.02em;
    text-transform: uppercase;

    padding: 12px 10px;

    color: ${(props) => props.theme.font.color.secondaryMain};

    border: 2px solid
      ${(props) => props.theme.controller.input.border.secondary};
    border-radius: 16px;

    &:active,
    &:hover {
      color: ${(props) => props.theme.controller.button.color.selected};

      background-color: ${(props) =>
        props.theme.controller.button.background.selected};
    }
  }
`;

export const TopPanel = () => {
  const { handleClickRecord } = useNavigateRecord();
  const { handleChangeBalance, handleClickButton, balance } = useBalance();

  return (
    <Container>
      <ContainerController>
        <Label>
          <SecondaryTextStyled>????????????:</SecondaryTextStyled>
          <Input
            type="number"
            placeholder={`${balance} ???`}
            onChange={handleChangeBalance}
            value={balance}
          />
        </Label>

        <ButtonStyled onClick={handleClickButton}>??????????????????????</ButtonStyled>
      </ContainerController>

      <Label onClick={handleClickRecord}>
        <SecondaryTextStyled margin="0 20px 0 0">
          ?????????????? ?? ??????????????
        </SecondaryTextStyled>
        <GraphIcon />
      </Label>
    </Container>
  );
};
