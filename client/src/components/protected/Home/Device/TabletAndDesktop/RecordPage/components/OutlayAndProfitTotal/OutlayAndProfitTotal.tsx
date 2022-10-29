import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 50px;

  display: flex;
  align-items: center;

  margin-top: 35px;
  padding: 7px 0;

  background-color: ${(props) => props.theme.background.body};
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
`;

const ContainerOutlay = styled.div`
  width: 50%;
  height: 36px;

  display: flex;
  justify-content: end;
  align-items: center;

  padding-right: 20px;

  border-right: 1px solid #e0e5eb; ;
`;

const ContainerProfit = styled.div`
  width: 50%;
  height: 36px;

  display: flex;
  justify-content: start;
  align-items: center;

  padding-left: 20px;
`;

const SecondaryText = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.font.size.normalBig};
  line-height: 16px;

  color: #52555f;
`;

const ColorText = styled.span<{ color: string }>`
  font-weight: 700;
  font-size: ${(props) => props.theme.font.size.normalBig};
  line-height: 16px;

  margin-left: 15px;

  cursor: pointer;

  color: ${(props) => props.color || '#000'};
`;

export const OutlayAndProfitTotal = () => {
  return (
    <Container>
      <ContainerOutlay>
        <SecondaryText>Расходы:</SecondaryText>
        <ColorText color="#E53935">- 18 000.00 грн.</ColorText>
      </ContainerOutlay>

      <ContainerProfit>
        <SecondaryText>Доходы:</SecondaryText>
        <ColorText color="#407946">+ 45 000.00 грн.</ColorText>
      </ContainerProfit>
    </Container>
  );
};
