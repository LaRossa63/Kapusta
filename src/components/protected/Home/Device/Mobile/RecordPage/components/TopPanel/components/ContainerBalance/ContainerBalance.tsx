import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 32px;
  gap: 10px;
`;

const SecondaryText = styled.p`
  font-weight: 500;
  font-size: ${(props) => props.theme.font.size.normal};
  letter-spacing: 0.02em;

  color: rgba(82, 85, 95, 0.7);
`;

const BalanceText = styled.span`
  width: 183px;
  height: 44px;

  font-weight: 700;
  font-size: ${(props) => props.theme.font.size.normal};
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;

  padding: 13px 0;

  border: 2px solid #ffffff;
  border-radius: 22px;
  color: ${(props) => props.theme.font.color.main};

  cursor: pointer;
`;

export const ContainerBalance = () => {
  return (
    <Container>
      <SecondaryText>Баланс:</SecondaryText>
      <BalanceText>55 000.00 UAH</BalanceText>
    </Container>
  );
};
