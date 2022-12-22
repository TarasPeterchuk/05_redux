import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selectors';
import * as weatherActions from './weather.actions';

const Weather = ({ weatherData, getWeatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map((city) => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

Weather.propTypes = {
  weatherData: PropTypes.arrayOf(PropTypes.shape()),
};
Weather.defaultValue = {
  weatherData: [],
};

const mapState = (state) => {
  return {
    weatherData: weatherDataSelector(state),
  };
};
const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
