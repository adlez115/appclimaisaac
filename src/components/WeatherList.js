import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import ButtonPush from './ButtonPush';
import '../assets/css/WeatherList.css'


const WeatherList = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const cities = ['Veracruz', 'La Paz', 'Mexicali', 'Merida', 'Guadalajara'];
    const promises = [];

    cities.forEach(city => {
      promises.push(
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
        )
      );
    });

    Promise.all(promises)
      .then(responses => {
        const data = responses.map(response => ({
          city: response.data.name,
          weather: response.data.weather[0].main,
          temp: Math.round(response.data.main.temp),
          humidity: Math.round(response.data.main.humidity)
        }));
        setWeatherData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className='row'>
           
            <div className='col-12'>
                {weatherData.map((data, index) => (
                <WeatherCard
                    key={index}
                    city={data.city}
                    weather={data.weather}
                    temp={data.temp}
                    humidity={data.humidity}
                />
                
                ))}
            </div>
            <div className='col-12 mt-1'>
                <ButtonPush/>
            </div>
        </div>
      </div>
    </>
  );
};

export default WeatherList;
