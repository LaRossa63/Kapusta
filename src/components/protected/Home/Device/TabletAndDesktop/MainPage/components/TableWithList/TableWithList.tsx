import React from 'react';
import styled from 'styled-components';

import { TableList } from 'components/Elements';
import { Tabs, Controls } from './components';
import { useGetDevice } from 'hooks';
import { KapustaBackground } from 'images';

const Container = styled.div`
  margin-top: 60px;

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    margin-top: 20px;
  }
`;

const Content = styled.div`
  height: 616px;

  padding: 24px 40px 0 40px;

  z-index: 100;

  background: ${(props) => props.theme.background.table};
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 0px 30px 30px 30px;

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    height: 579px;
    padding: 32px 32px 0 32px;

    position: relative;
  }
`;

const KapustaBackgroundStyled = styled(KapustaBackground)`
  min-width: 1270px;
  height: 232px;

  margin-top: 30px;

  position: absolute;
  bottom: -170px;
  z-index: 1;
`;

export const TableWithList = () => {
  const { isDesktop } = useGetDevice();

  return (
    <Container>
      <Tabs />
      <Content>
        <Controls />
        <TableList />
      </Content>

      {isDesktop && <KapustaBackgroundStyled />}
    </Container>
  );
};
