import { WEATHER_DATA_RECEIVED } from './weather.actions';

const initialData = {
  weatherData: [],
};

const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case WEATHER_DATA_RECEIVED: {
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
