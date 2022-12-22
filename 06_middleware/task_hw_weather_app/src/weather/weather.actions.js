export const WEATHER_DATA_RECEIVED = 'WEATHER_DATA_RECEIVED';
import { getWeatherData } from './weather.gateway';

export const weatherDataReceived = (weatherData) => {
  return {
    type: WEATHER_DATA_RECEIVED,
    payload: { weatherData },
  };
};

export const fetchWeatherData = () => {
  return function (dispatch) {
    getWeatherData().then((weatherData) => {
      dispatch(weatherDataReceived(weatherData));
    });
  };
};
