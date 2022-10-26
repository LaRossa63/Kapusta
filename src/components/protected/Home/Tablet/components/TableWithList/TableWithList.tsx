import React from 'react';
import styled from 'styled-components';

import { TableList } from 'components/Elements';
import { Tabs, Controls } from './components';

const Container = styled.div`
  margin-top: 60px;
`;

const Content = styled.div`
  height: 616px;

  padding: 24px 40px 0 40px;

  background: ${(props) => props.theme.background.table};
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 0px 30px 30px 30px;
`;

export const TableWithList = () => {
  return (
    <Container>
      <Tabs />
      <Content>
        <Controls />
        <TableList />
      </Content>
    </Container>
  );
};
