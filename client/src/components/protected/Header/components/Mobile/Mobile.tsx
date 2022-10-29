import React from 'react';
import styled from 'styled-components';

import { Avatar } from 'components/Elements';
import { ExitIcon } from 'images';

const Container = styled.div`
  display: flex;

  margin-right: 20px;
  gap: 15px;
`;

export const Mobile = () => {
  return (
    <>
      <Container>
        <Avatar name="M" />
        <ExitIcon />
      </Container>
    </>
  );
};
