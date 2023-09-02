import React, { useState, useEffect } from "react";
import WeatherService from "../services/wetherservice";
import cityData from "../data/cities.json";
import  Weather  from "./Weather";
import "./MainWeather.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Headerbg from "./Headerbg.png";
import { Col, Container, Row } from "react-bootstrap";

const CityList = () => {
  const [weatherData, setWeatherData] = useState([]);

  async function fetchWeatherData() {
    const cityCodes = cityData.List;
    const dataPromises = cityCodes.map((cityArray) =>
      WeatherService.getWeatherByCityCode(cityArray.CityCode)
    );

    try {
      const weatherResults = await Promise.all(dataPromises);
      setWeatherData(weatherResults);
    } catch (error) {
      // Handle the error
    }
  }

  useEffect(() => {
    fetchWeatherData();
  }, []);

  // Define a function to map weather descriptions to colors
  const getColorForDescription = (desc) => {
    switch (desc) {
      case "clear sky":
        return "#40b681";
      case "few clouds":
        return "#de944e";
      case "scattered clouds":
        return "#6249cc";
      case "broken clouds":
        return "#6249cc";
      case "overcast clouds":
        return "#9c3a3a";
      default:
        return "white";
    }
  };

  // Split the weatherData into pairs for each row
  const weatherPairs = [];
  for (let i = 0; i < weatherData.length; i += 2) {
    const pair = weatherData.slice(i, i + 2);
    weatherPairs.push(pair);
  }

  return (
    <div
      style={{
        fontFamily: "Inter",
        color: "white",
        backgroundImage: `url(${Headerbg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <p style={{ fontSize: "20px", position: "relative" }}>
          <b>
            <center>
              <WbSunnyIcon /> Weather App
            </center>
          </b>
        </p>
        <div>
          {weatherPairs.map((pair, index) => (
            <Row key={index} className="weather-row">
              {pair.map((city, cityIndex) => (
                <Col lg={6} key={cityIndex} style={{}}>
                  <Weather style={{ color: "white" }}
                    key={cityIndex}
                    city={city.list[0].name}
                    temp={city.list[0].main.temp}
                    date={new Date(city.list[0].dt * 1000).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                    desc={city.list[0].weather[0].description}
                    color={getColorForDescription(city.list[0].weather[0].description)}
                    pressure={city.list[0].main.pressure}
                    humidity={city.list[0].main.humidity}
                    visibility={city.list[0].visibility / 1000}
                    temp_min={city.list[0].main.temp_min}
                    temp_max={city.list[0].main.temp_max}
                    windspeed={city.list[0].wind.speed}
                    degree={city.list[0].wind.deg}
                    sunrise={new Date(city.list[0].sys.sunrise * 1000).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                    sunset={new Date(city.list[0].sys.sunset * 1000).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                    
                  />
                </Col>
              ))}
            </Row>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityList;
