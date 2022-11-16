import React from 'react';

import { useListOutlayAndProfit } from 'hooks';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { DeleteIcon } from 'images';
import { Button } from 'components/Elements';

const Container = styled.div`
  margin-top: 50px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ListItem = styled.li`
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 10px;

  border-bottom: 1px solid #f5f6fb;
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerDescription = styled.div`
  display: flex;

  margin-top: 5px;
  gap: 20px;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.font.size.normal};
  line-height: 14px;

  color: #52555f;
`;

const TextDescription = styled.span`
  font-size: 9px;
  line-height: 9px;

  color: #52555f;
`;

const ContainerControls = styled.div`
  display: flex;
  align-items: center;

  gap: 30px;
`;

const TextOutlayAndProfit = styled.span<{ mode: string }>`
  font-weight: 700;
  font-size: 12px;

  color: ${(props) => (props.mode === '/profit' ? 'green' : 'red')};
`;

const ButtonStyled = styled(Button)`
  &.MuiButtonBase-root {
    min-width: 15px;
    height: 17px;
  }
`;

export const Table = () => {
  const { handleClickDelete, currentList } = useListOutlayAndProfit();
  const { pathname } = useLocation();

  return (
    <Container>
      <List>
        {currentList &&
          currentList.map((element) => (
            <ListItem key={element.id}>
              <ContainerContent>
                <Title>{element.description}</Title>

                <ContainerDescription>
                  <TextDescription>{element.data}</TextDescription>
                  <TextDescription>{element.categoryText}</TextDescription>
                </ContainerDescription>
              </ContainerContent>

              <ContainerControls>
                <TextOutlayAndProfit mode={pathname}>
                  {element.amount} ₽
                </TextOutlayAndProfit>

                <ButtonStyled onClick={() => handleClickDelete(element.id)}>
                  <DeleteIcon />
                </ButtonStyled>
              </ContainerControls>
            </ListItem>
          ))}
      </List>
    </Container>
  );
};
