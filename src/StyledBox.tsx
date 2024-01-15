import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    width: '300px',
  },
  [theme.breakpoints.up('md')]: {
    width: '600px',
  },
}));
