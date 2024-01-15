/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGeolocated } from 'react-geolocated';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { StyledBox } from './StyledBox';

interface DayTemps {
  date: number;
  maxTemp: number;
  minTemp: number;
}

const WeatherGraph = () => {
  const [weatherData, setWeatherData] = useState<DayTemps[]>([]);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 7000,
    });

  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}=${coords?.latitude},${coords?.longitude}&days=7&aqi=no&alerts=no`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dayTemps: DayTemps[] = [];
        const response = await fetch(URL);
        const weatherData = await response.json();
        const modifiedData = weatherData.forecast.forecastday;
        // I know the "any" type for "day" doesn't look great, but the object itself is quite large 
        // and I decided against typing it out by hand, given the fact it's not a production-ready project
        // https://www.weatherapi.com/docs/#apis-forecast
        modifiedData.forEach((day: { date_epoch: number; day: any }) => {
          dayTemps.push({
            date: day.date_epoch * 1000,
            maxTemp: day.day.maxtemp_c,
            minTemp: day.day.mintemp_c,
          });
        });
        setWeatherData(dayTemps);
      } catch (error: unknown) {
        console.error(error);
      }
    };
    fetchData();
  }, [URL]);

  const minTemps: number[] = [];
  const maxTemps: number[] = [];
  const xLabels: number[] = [];
  weatherData.forEach((day) => {
    minTemps.push(day.minTemp);
    maxTemps.push(day.maxTemp);
    xLabels.push(day.date);
  });

  const yearFormater = (date: Date) =>
    new Date(date).toLocaleDateString('en-GB', {
      month: 'short',
      day: 'numeric',
    });

  const tempFormatter = (temp: number) => `${temp}°C`;

  const tempChart = (
    <StyledBox>
      <Typography align='left' variant='h5' color={'#69a3bc'} fontWeight={900}>
        Weather Forecast
      </Typography>
      <LineChart
        height={300}
        series={[
          {
            data: maxTemps,
            label: 'High',
            color: 'firebrick',
            valueFormatter: tempFormatter,
          },
          {
            data: minTemps,
            label: 'Low',
            color: 'lightblue',
            valueFormatter: tempFormatter,
          },
        ]}
        xAxis={[
          {
            scaleType: 'time',
            valueFormatter: yearFormater,
            data: xLabels,
            tickMinStep: 3600 * 1000 * 24,
          },
        ]}
        yAxis={[{ label: 'Temperature (°C)' }]}
      />
    </StyledBox>
  );

  return (
    <Box>
      {!isGeolocationAvailable ? (
        <Box>Your browser does not support Geolocation</Box>
      ) : !isGeolocationEnabled ? (
        <Box>Geolocation is not enabled</Box>
      ) : coords ? (
        tempChart
      ) : (
        <Box>Getting the location data...</Box>
      )}
    </Box>
  );
};

export default WeatherGraph;
