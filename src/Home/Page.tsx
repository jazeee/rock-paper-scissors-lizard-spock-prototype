import { Box, Container, Typography } from '@mui/material';

import { PageLayout } from 'components/Layouts/PageLayout';
import { Spacer } from 'components/Spacer';

import { PriorWinnersPanel } from './PriorWinners/Panel';
import { SignUpPanel } from './SignUp/Panel';

export function HomePage() {
  return (
    <PageLayout>
      <Container maxWidth="lg">
        <Typography variant="h1" textAlign="center">
          Epic Rock-Paper-Scissors-Lizard-Spock Contest
        </Typography>
        <Spacer height={8} />
        <Box
          display="flex"
          gap={6}
          sx={{
            flexDirection: {
              xs: 'column-reverse',
              md: 'row',
            },
          }}
        >
          <PriorWinnersPanel />
          <SignUpPanel tournamentId={1} />
        </Box>
      </Container>
    </PageLayout>
  );
}
