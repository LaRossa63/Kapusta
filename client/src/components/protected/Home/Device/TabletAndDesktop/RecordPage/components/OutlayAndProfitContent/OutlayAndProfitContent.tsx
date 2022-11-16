import React from 'react';
import styled from 'styled-components';

import { Button, SliderOutlayAndProfit } from 'components/Elements';
import { useGetRecordList } from 'hooks';

const Container = styled.div`
  margin-top: 32px;
  padding: 20px 40px 30px 40px;

  background-color: ${(props) => props.theme.background.body};
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
`;

const ListContent = styled.ul`
  height: fit-content;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 20px;
  gap: 30px;

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    gap: 50px;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  gap: 6px;
`;

const TextDescriptionItem = styled.span`
  font-size: ${(props) => props.theme.font.size.normal};

  text-transform: uppercase;

  color: #52555f;
`;

const ButtonStyled = styled(Button)`
  &.MuiButton-root {
    width: 56px;
    height: 56px;

    border-radius: 60%;
  }
`;

export const OutlayAndProfitSlider = () => {
  const { handleClickIcon, currentList, selectedCategory } = useGetRecordList();

  return (
    <Container>
      <SliderOutlayAndProfit />

      <ListContent>
        {currentList.map((element) => (
          <ListItem key={element.id}>
            <ButtonStyled onClick={() => handleClickIcon(element.id)}>
              <element.icon
                color={element.id === selectedCategory ? '#FF751D' : null}
              />
            </ButtonStyled>

            <TextDescriptionItem>{element.description}</TextDescriptionItem>
          </ListItem>
        ))}
      </ListContent>
    </Container>
  );
};
