import { AppBar, Typography } from '@mui/material';
import { ReactNode } from 'react';

import { Spacer } from 'components/Spacer';

interface Props {
  children: ReactNode;
}

export function PageLayout(props: Props) {
  const { children } = props;
  return (
    <>
      <AppBar
        position="static"
        sx={{
          padding: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="p">
          Paper On The Rocks
        </Typography>
      </AppBar>
      <Spacer height={4} />
      {children}
      <Spacer height={8} />
      <footer>
        <Typography textAlign="center" variant="body2">
          Copyright 2023 - My Bar
        </Typography>
      </footer>
    </>
  );
}
