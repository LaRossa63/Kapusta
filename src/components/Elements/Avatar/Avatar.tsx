import { FC } from 'react';
import styled from 'styled-components';

import { Avatar as MuiAvatar } from '@mui/material';

interface Props {
  name: string;

  margin?: string;
}

const AvatarStyled = styled(MuiAvatar)`
  &.MuiAvatar-root {
    width: 32px;
    height: 32px;
  }
`;

export const Avatar: FC<Props> = ({ name, margin }) => {
  return <AvatarStyled src="none" alt={name} sx={{ margin: margin }} />;
};
