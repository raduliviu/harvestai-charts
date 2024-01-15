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
