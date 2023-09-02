import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import Clooounds from "./cloounds.png";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import "./Weather.css"; // Import the CSS file for styling

const Weather = (props) => {
  const {
    city,
    temp,
    date,
    desc,
    pressure,
    humidity,
    visibility,
    temp_min,
    temp_max,
    windspeed,
    degree,
    sunrise,
    sunset,
    color,
  } = props;

  return (
    <div className="weather-container">
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          sx={{
            height: 250,
            backgroundColor: color,
          }}
          image={Clooounds}
          title="green iguana"
        >
          <CardContent>
            <div className="weather-header">
              <div className="weather-header-left">
                <p className="city">{city}</p>
                <p className="date">{date}</p>
              </div>
              <div className="weather-header-right">
                <p className="temperature">{temp}&deg;C</p>
              </div>
            </div>
            <div className="weather-info">
              <div className="weather-icon">
                <CloudQueueOutlinedIcon />
                <b>{desc}</b>
              </div>
              <div className="temperature-range">
                <p>
                  <b>Temp min: {temp_min}&deg;C</b>
                </p>
                <p>
                  <b>Temp max: {temp_max}&deg;C</b>
                </p>
              </div>
            </div>
          </CardContent>
        </CardMedia>

        <CardContent className="weather-details">
          <div className="weather-details-left">
            <p>
              <b>Pressure:</b> {pressure} hpa
            </p>
            <p>
              <b>Humidity:</b> {humidity} %
            </p>
            <p>
              <b>Visibility:</b> {visibility} km
            </p>
          </div>
          <hr className="weather-details-divider" />
          <div className="weather-details-center">
            <center>
              <NearMeOutlinedIcon />
            </center>
            <center>
              <p>
                {windspeed} m/s {degree} degree
              </p>
            </center>
          </div>
          <div className="weather-details-right">
            <p>
              <b>Sunrise:</b> {sunrise}
            </p>
            <p>
              <b>Sunset:</b> {sunset}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Weather;