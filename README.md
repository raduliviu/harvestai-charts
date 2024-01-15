# HarvestAI Coding Challenge

This is my solution to the HarvestAI coding challenge. The task required building two features:

- A dynamic bar chart, with an associated button where the user can enter the values to be represented on the chart
- A weather forecast line graph, which shows the weather forecast for the week based on the user's location

## How to run

EITHER

- clone the repository locally, go to [weatherapi.com](https://www.weatherapi.com/) to obtain an API key, then create a `.env` file in the root of the project directory, and put in the value `VITE_WEATHER_API_KEY={YOURKEY}`, then run `npm i` to install all dependencies and finally `npm run dev` to run it locally

OR

- Experience it online, [here](https://raduliviu.github.io/harvestai-charts/) 😁

## Tools used

This task was solved using:

- [React](https://react.dev/)
- Weather forecast data from the [weatherapi.com](https://www.weatherapi.com/) API
- [react-geolocated](https://github.com/no23reason/react-geolocated), for a very easy and lightweight way to obtain the user's coordinates (and especially useful for displaying messages if the user's browser does not support Geolocation or if Geolocation is not enabled)
- [MaterialUI](https://mui.com/material-ui/getting-started/), for various UI components
- [MaterialUI Charts](https://mui.com/x/react-charts/), for displaying the actual charts

## Explanation

The app is quite simple. There is one component for the Bar Chart(`DynamicBarChart.tsx`), one component for the Weather Graph(`WeatherGraph.tsx`), and another component(`StyledBox.tsx`) which is just a container for these two charts which resizes based on specific breakpoints.

For the Bar Chart:
The four bars correspond to four React state values, initialized with some sample numbers. Then the Generate Chart button brings up a Popover component with four controlled Input fields, which change the value of the state associated with each bar in the chart.

For the Weather Graph:
I obtain the user's coordinates using the react-geolocated hook, then I take the latitude and longitude from that response and use them in building the call to the Weather API. From that API response, I build an array of objects of the next 7 days, of which one object consists of the date, max temperature and min temperature. I then use the dates as values for my X axis, and then the temperatures as values for my Y axis.
