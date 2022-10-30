import React from 'react';
import styled from 'styled-components';

import { Avatar } from 'components/Elements';
import { ExitIcon } from 'images';
import { useHeaderLogout } from 'hooks/Auth';

const Container = styled.div`
  display: flex;

  margin-right: 20px;
  gap: 15px;
`;

export const Mobile = () => {
  const { handleClickLogout, currentName } = useHeaderLogout();

  return (
    <>
      <Container>
        <Avatar name={currentName} />
        <ExitIcon onClick={handleClickLogout} />
      </Container>
    </>
  );
};
