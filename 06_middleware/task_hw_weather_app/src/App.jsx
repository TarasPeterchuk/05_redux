import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Weather from './weather/Weather';
import { fetchWeatherData } from './weather/weather.actions';

store.dispatch(fetchWeatherData());

const App = () => {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
};

export default App;
