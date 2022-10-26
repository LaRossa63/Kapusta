import React from 'react';
import styled from 'styled-components';

import { KapustaSecondaryBackground } from 'images';
import { TopPanel, TableWithList } from './components';
import { Collection } from './components/TableWithList/components';

const Container = styled.div`
  width: 100%;
  height: auto;

  position: absolute;
  top: 90px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 704px;

  height: 100%;

  position: relative;

  margin: 0 auto;
`;

const KapustaBackgroundStyled = styled(KapustaSecondaryBackground)`
  min-width: 183px;
  min-height: 142px;

  z-index: 1;
  position: absolute;
  bottom: 25px;
  right: 110px;
`;

export const Tablet = () => {
  return (
    <Container>
      <Content>
        <TopPanel />
        <TableWithList />

        <Collection />
        <KapustaBackgroundStyled />
      </Content>
    </Container>
  );
};
