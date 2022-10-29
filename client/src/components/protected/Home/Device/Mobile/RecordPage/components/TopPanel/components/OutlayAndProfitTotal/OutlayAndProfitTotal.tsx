import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 85px;

  display: flex;
  align-items: center;

  margin-top: 32px;
  padding: 7px 0;

  background-color: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;
`;

const ContainerOutlay = styled.div`
  width: 50%;
  height: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-right: 10px;
  gap: 5px;

  border-right: 1px solid #e0e5eb; ;
`;

const ContainerProfit = styled.div`
  width: 50%;
  height: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-right: 10px;
  gap: 5px;
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
