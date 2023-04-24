import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/weatherCard.css';
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'yellow',
  size: 50,
  animate: true
};

const WeatherCard = ({ city, weather, temp, humidity }) => {
  const getWeatherIcon = () => {
    switch (weather) {
      case 'Clouds':
        return <ReactAnimatedWeather
        icon={'CLOUDY'}
        color={'blue'}
        size={defaults.size}
        animate={defaults.animate}
      />;
      case 'Clear':
        return <ReactAnimatedWeather
        icon={'CLEAR_DAY'}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />;
      case 'Snow':
        return <ReactAnimatedWeather
        icon={'SNOW'}
        color={'blue'}
        size={defaults.size}
        animate={defaults.animate}
      />;
      case 'Rain':
        return <ReactAnimatedWeather
        icon={'RAIN'}
        color={'blue'}
        size={defaults.size}
        animate={defaults.animate}
      />;
      default:
        return <ReactAnimatedWeather
        icon={'CLOUDY'}
        color={'blue'}
        size={defaults.size}
        animate={defaults.animate}
      />;
    }
  };

  return (
  <div className="col card mt-2 mx-2">
    <div className='row'>
        <div className='col-2 card-body'>
            <h2 className='city text-center card-title'>{city}</h2>
        </div>
        <div className='col-6 card-text'>
            <div className="weather-icon">{getWeatherIcon()}</div>
            <div className="temp">{temp}°C</div>
            <div className="humidity"><ReactAnimatedWeather
        icon={'FOG'}
        color={'gray'}
        size={15}
        animate={defaults.animate}
      />{humidity}%</div>
        </div>
    </div>
  </div>
);
};

export default WeatherCard;