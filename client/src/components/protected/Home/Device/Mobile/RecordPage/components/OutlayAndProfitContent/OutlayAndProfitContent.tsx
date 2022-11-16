import React from 'react';
import styled from 'styled-components';

import { Button, SliderOutlayAndProfit } from 'components/Elements';
import { useGetRecordList } from 'hooks';

const Container = styled.div`
  margin-top: 32px;
`;

const ListContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 20px;
  gap: 20px;
`;

const ListItem = styled.li`
  width: 69px;
  height: 96px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  gap: 6px;
`;

const TextDescriptionItem = styled.span`
  font-size: ${(props) => props.theme.font.size.normal};
  text-transform: uppercase;
  text-align: center;

  color: #52555f;
`;

const ButtonStyled = styled(Button)`
  &.MuiButton-root {
    width: 56px;
    height: 56px;

    border-radius: 60%;
  }
`;

const BorderTest = styled.li`
  width: 100%;
  height: 1px;

  margin-bottom: 10px;

  border-bottom: 1px solid #e0e5eb;
`;

export const OutlayAndProfitContent = () => {
  const { handleClickIcon, currentList, selectedCategory } = useGetRecordList();

  return (
    <Container>
      <SliderOutlayAndProfit />

      <ListContent>
        {currentList.map((element, index) => (
          <div key={element.id}>
            <ListItem>
              <TextDescriptionItem>5 000.00</TextDescriptionItem>

              <ButtonStyled onClick={() => handleClickIcon(element.id)}>
                <element.icon
                  color={element.id === selectedCategory ? '#FF751D' : null}
                />
              </ButtonStyled>
              <TextDescriptionItem>{element.description}</TextDescriptionItem>
            </ListItem>

            {index > 0 && (index + 1) % 3 === 0 && <BorderTest />}
            {index === currentList.length - 1 && <BorderTest />}
          </div>
        ))}
      </ListContent>
    </Container>
  );
};
