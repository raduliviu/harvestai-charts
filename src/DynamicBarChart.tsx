import {
  Box,
  Button,
  Popover,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { useState } from 'react';
import { StyledBox } from './StyledBox';

const DynamicBarChart = () => {
  const [barAValue, setBarAValue] = useState<number>(1);
  const [barBValue, setBarBValue] = useState<number>(2);
  const [barCValue, setBarCValue] = useState<number>(3.5);
  const [barDValue, setBarDValue] = useState<number>(2);

  // Code required for the Popover
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // End of code required for the Popover

  return (
    <StyledBox>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant='h5' color={'#69a3bc'} fontWeight={900}>
          Bar Chart
        </Typography>
        <Button
          aria-describedby={id}
          variant='contained'
          onClick={handleClick}
          sx={{
            marginRight: '3rem',
            backgroundColor: '#69a3bc',
            '&:hover': { backgroundColor: '#527495' },
          }}
        >
          Generate Chart
        </Button>
      </Box>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box padding={2}>
          <Stack spacing={2}>
            <TextField
              label='Bar A'
              variant='standard'
              size='small'
              type='number'
              value={barAValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBarAValue(+e.target.value)
              }
            />
            <TextField
              label='Bar B'
              variant='standard'
              size='small'
              type='number'
              value={barBValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBarBValue(+e.target.value)
              }
            />
            <TextField
              label='Bar C'
              variant='standard'
              size='small'
              type='number'
              value={barCValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBarCValue(+e.target.value)
              }
            />
            <TextField
              label='Bar D'
              variant='standard'
              size='small'
              type='number'
              value={barDValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBarDValue(+e.target.value)
              }
            />
          </Stack>
        </Box>
      </Popover>
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: ['Bar A', 'Bar B', 'Bar C', 'Bar D'],
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: [barAValue, barBValue, barCValue, barDValue],
            color: '#69a3bc',
          },
        ]}
        height={300}
      />
    </StyledBox>
  );
};

export default DynamicBarChart;
