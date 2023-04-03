import { Box, List, ListItem, Paper, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { Spacer } from 'components/Spacer';
import { IRegistrant } from 'Home/types';

import { ISignUpFormProps, SignUpForm } from './Form';

let currentRegistrantId = 0;
interface Props {
  tournamentId: number;
}

export function SignUpPanel(props: Props) {
  const { tournamentId } = props;
  const [registrants, setRegistrants] = useState<IRegistrant[]>([]);
  const { mutateAsync, isLoading, error } = useMutation({
    mutationFn: (values: ISignUpFormProps) => {
      // FIXME - add API Call here.
      const { userName } = values;
      return new Promise<string>((resolve) => {
        if (!userName) {
          // Minimal client side validation.
          throw new Error('userName is required');
        }
        if (registrants.map((value) => value.userName).includes(userName)) {
          // This would occur on the server.
          throw new Error(`User ${userName} was already registered.`);
        }
        setTimeout(() => {
          setRegistrants((currentRegistrants) => {
            currentRegistrantId += 1;
            return [
              ...currentRegistrants,
              {
                id: currentRegistrantId,
                userName,
                tournamentId,
                createdAt: new Date().toISOString(),
              },
            ];
          });
          resolve(`Added ${userName}`);
        }, 500);
      });
    },
  });
  return (
    <Box flex={1}>
      {/* TODO - add today's (or tomorrow's) day name */}
      <Typography variant="h2" textAlign="center">
        Sign up for The Next Game
      </Typography>
      <Spacer height={2} />
      <Paper sx={{ padding: 2 }}>
        <SignUpForm
          onSubmit={(values) => {
            return mutateAsync(values);
          }}
          formIsSubmitting={isLoading}
        />
        {Boolean(error) && <Typography color="error">{String(error)}</Typography>}
        <Spacer height={4} />
        <Typography>Contestants</Typography>
        <List
          sx={{
            maxHeight: '16rem',
            overflowY: 'auto',
          }}
        >
          {registrants.map((registrant) => {
            const { userName } = registrant;
            return <ListItem key={userName}>{userName}</ListItem>;
          })}
          {registrants.length === 0 && <ListItem>No Contestants</ListItem>}
        </List>
      </Paper>
    </Box>
  );
}
