import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { format, parseISO } from 'date-fns';

import { Spacer } from 'components/Spacer';

interface IWinner {
  date: string;
  userName: string;
}

export function PriorWinnersPanel() {
  const {
    data: priorWinners = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['/api/v1/winners'],
    queryFn: () => {
      return new Promise<IWinner[]>((resolve) => {
        setTimeout(() => {
          resolve([
            {
              date: '2023-04-01',
              userName: 'Jaz',
            },
            {
              date: '2022-04-20',
              userName: 'Some Long user with a very long name',
            },
            {
              date: '2022-04-01',
              userName: 'Jaz',
            },
          ]);
        }, 1000);
      });
    },
  });
  return (
    <Box flex={1}>
      {/* TODO - add today's (or tomorrow's) day name */}
      <Typography variant="h2" textAlign="center">
        Most Recent Winners
      </Typography>
      <Spacer height={2} />
      {Boolean(error) && <Typography color="error">{String(error)}</Typography>}
      {isLoading && <CircularProgress size={32} />}
      {!isLoading && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {priorWinners.map((winner) => {
                const { date, userName } = winner;
                return (
                  <TableRow key={date}>
                    <TableCell>{format(parseISO(date), 'PP')}</TableCell>
                    <TableCell>{userName}</TableCell>
                  </TableRow>
                );
              })}
              {priorWinners.length === 0 && (
                <TableRow>
                  <TableCell>No Winners</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
