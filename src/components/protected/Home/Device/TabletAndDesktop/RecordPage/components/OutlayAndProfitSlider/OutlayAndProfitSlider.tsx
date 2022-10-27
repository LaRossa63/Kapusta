import React from 'react';
import styled from 'styled-components';

import { SliderLeftIcon, SliderRightIcon } from 'images';
import {
  Alcohol_2,
  CommunalCommunication_8,
  Education_10,
  EverythingHome_6,
  Health_4,
  Kite_3,
  Other_11,
  Products_1,
  SportsHobbies_9,
  Technic_7,
  Transport_5,
} from 'images/IconsOutlay';

const Container = styled.div`
  height: 348px;

  margin-top: 32px;
  padding: 20px 40px;

  background-color: ${(props) => props.theme.background.body};
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
`;

const ContainerSlider = styled.div`
  display: flex;
  justify-content: center;

  gap: 16px;
`;

const TextSlider = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.font.size.normalBig};
  line-height: 16px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #000000;
`;

const ListContent = styled.ul`
  height: 268px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 20px;
  gap: 30px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 6px;
`;

const TextDescriptionItem = styled.span`
  font-size: ${(props) => props.theme.font.size.normal};

  text-transform: uppercase;

  color: #52555f;
`;

const ListIconsOutlay = [
  {
    id: 0,
    icon: <Products_1 />,
    description: 'продукты',
  },
  {
    id: 1,
    icon: <Alcohol_2 />,
    description: 'алкоголь',
  },
  {
    id: 2,
    icon: <Kite_3 />,
    description: 'развлечение',
  },
  {
    id: 3,
    icon: <Health_4 />,
    description: 'здоровье',
  },
  {
    id: 4,
    icon: <Transport_5 />,
    description: 'транспорт',
  },
  {
    id: 5,
    icon: <EverythingHome_6 />,
    description: 'все для дома',
  },
  {
    id: 6,
    icon: <Technic_7 />,
    description: 'техника',
  },
  {
    id: 7,
    icon: <CommunalCommunication_8 />,
    description: 'коммуналка, связь',
  },
  {
    id: 8,
    icon: <SportsHobbies_9 />,
    description: 'спорт, хобби',
  },
  {
    id: 9,
    icon: <Education_10 />,
    description: 'образование',
  },
  {
    id: 10,
    icon: <Other_11 />,
    description: 'прочее',
  },
];

export const OutlayAndProfitSlider = () => {
  return (
    <Container>
      <ContainerSlider>
        <SliderLeftIcon />
        <TextSlider>Расходы</TextSlider>
        <SliderRightIcon />
      </ContainerSlider>

      <ListContent>
        {ListIconsOutlay.map((element) => (
          <ListItem>
            <TextDescriptionItem>5 000.00</TextDescriptionItem>
            {element.icon}
            <TextDescriptionItem>{element.description}</TextDescriptionItem>
          </ListItem>
        ))}
      </ListContent>
    </Container>
  );
};
