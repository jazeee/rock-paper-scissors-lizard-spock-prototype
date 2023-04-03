import { Box } from '@mui/material';

interface Props {
  height: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

export function Spacer(props: Props) {
  const { height } = props;
  return <Box sx={{ height: (theme) => theme.spacing(height) }} />;
}
