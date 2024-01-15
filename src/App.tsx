import './App.css';
import DynamicBarChart from './DynamicBarChart';
import WeatherGraph from './WeatherGraph';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      <DynamicBarChart />
      <WeatherGraph />
    </Box>
  );
}

export default App;
