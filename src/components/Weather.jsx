import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import Clooounds from "../images/cloounds.png";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import "../styles/Weather.css";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import Popup from "./Popup";

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

  
  // State to manage whether the popup is open or not
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="weather-container" >
      <Card className="card_style" onClick={openPopup}>

        <CardMedia
          className="card_media_style"
          sx={{ backgroundColor: color }}
          image={Clooounds}
        >
          <CardContent>
            <div className="weather-header">
              <Row>
                <Col lg={9} sm={12}>
                  <div className="weather-header-left">
                    <p className="city">{city}</p>
                    <p className="date">{date}</p>
                  </div>
                </Col>
                <Col lg={3} sm={12}>
                  <div className="weather-header-right">
                    <p className="temperature">{temp}&deg;C</p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="weather-info">
              <Row>
                <Col lg={9} sm={12}>
                  <div className="weather-icon">
                    <CloudQueueOutlinedIcon className="cloud-icon" />
                    <b>{desc}</b>
                  </div>
                </Col>
                <Col lg={3} sm={12}>
                  <div className="temperature-range">
                    <p>
                      <b>Temp_min:-{temp_min}&deg;C</b>
                    </p>
                    <p>
                      <b>Temp_max:-{temp_max}&deg;C</b>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </CardContent>
        </CardMedia>

        <CardContent className="weather-details">

        <Row>
  <Col lg={3} sm={12}>
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
          </div></Col>
  <Col  lg={1} sm={12}>  <hr  className="weather-details-divider" /></Col>
  <Col lg={3} sm={12}> <div className="weather-details-center">
            

             
           
              <p>
              <NearMeOutlinedIcon /> {windspeed} m/s {degree} degree
              </p>
           
          </div></Col>
  <Col lg={1} sm={12}>    <hr  className="weather-details-divider" /></Col>
  <Col lg={3} sm={12}>      <div className="weather-details-right">
            <div className="sunrise-sunset">
              <p>
                <b>Sunrise:</b>{sunrise}
              </p>
              <p>
                <b>Sunset:</b> {sunset}
              </p>
            </div>
          </div></Col>
</Row>

        
        
         
      
    
        </CardContent>
      </Card>
      {isPopupOpen && (
        <Popup
          city={city}
          temp={temp}
          date={date}
          desc={desc}
          pressure={pressure}
          humidity={humidity}
          visibility={visibility}
          temp_min={temp_min}
          temp_max={temp_max}
          windspeed={windspeed}
          degree={degree}
          sunrise={sunrise}
          sunset={sunset}
          color={color}
          onClose={closePopup}
          
        />
      )}
    </div>
  );
};

export default Weather;

