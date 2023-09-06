import React, { useState, useEffect } from "react";
import WeatherService from "../services/wetherservice";
import cityData from "../data/cities.json";
import Weather from "./Weather";
import "..//styles/MainWeather.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Headerbg from "../images/Headerbg.png";
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
    } catch (error) {}
  }

  useEffect(() => {
    fetchWeatherData();
    console.log(process.env);
  }, []);

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
      case "light rain":
        return "#3a8a9c";
      case "shower rain":
        return "#3a4e9c";
      default:
        return "red";
    }
  };

  const weatherPairs = [];
  for (let i = 0; i < weatherData.length; i += 2) {
    const pair = weatherData.slice(i, i + 2);
    weatherPairs.push(pair);
  }

  return (
    <div>
      <p style={{ fontSize: "30px", position: "relative", top: "20px" }}>
        <b>
          <center>
            <WbSunnyIcon style={{ fontSize: "30px" }} /> Weather App
          </center>
        </b>
      </p>
      <Container fluid className="weather-container">
        {weatherPairs.map((pair, index) => (
          <Row key={index} className="weather-row">
            {pair.map((city, cityIndex) => (
              <Col lg={6} key={cityIndex}>
                <Weather
                  key={cityIndex}
                  city={city.list[0].name}
                  temp={city.list[0].main.temp}
                  date={new Date(city.list[0].dt * 1000).toLocaleTimeString(
                    [],
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    }
                  )}
                  desc={city.list[0].weather[0].description}
                  color={getColorForDescription(
                    city.list[0].weather[0].description
                  )}
                  pressure={city.list[0].main.pressure}
                  humidity={city.list[0].main.humidity}
                  visibility={city.list[0].visibility / 1000}
                  temp_min={city.list[0].main.temp_min}
                  temp_max={city.list[0].main.temp_max}
                  windspeed={city.list[0].wind.speed}
                  degree={city.list[0].wind.deg}
                  sunrise={new Date(
                    city.list[0].sys.sunrise * 1000
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                  sunset={new Date(
                    city.list[0].sys.sunset * 1000
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default CityList;
