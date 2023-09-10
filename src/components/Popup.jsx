import React from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slide from "@mui/material/Slide";
import { Col, Row } from "react-bootstrap";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import "../styles/Weather.css";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Popup = (props) => {
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
    onClose,
  } = props;

  return (
    <Dialog
      className="popup-container"
      fullScreen
      open={onClose}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <div className="popup">
        <div className="popup-win" style={{ backgroundColor: color }}>
          <div>
            <Row>
              <Col lg={1} sm={1}>
                <ArrowBackIcon
                  className="popup-close"
                  edge="start"
                  onClick={onClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </ArrowBackIcon>
              </Col>

              <Col>
                <p className="popup-city">{city}</p>
                <p className="popup-date">{date}</p>
              </Col>
            </Row>

            <Row>
              <Col lg={5} sm={12}>
                <div className="weather-icon">
                  <CloudQueueOutlinedIcon className="cloud-icon" />
                  <b>{desc}</b>
                </div>
              </Col>
              <Col lg={1} sm={12}>
                {" "}
                <hr className="pop-weather-details-divider" />
              </Col>
              <Col lg={5} sm={12}>
                <Row>
                  <Col lg={12} sm={12}>
                    <div className="weather-header-right">
                      <p className="temperature">{temp}&deg;C</p>
                    </div>
                  </Col>

                  <Col lg={12} sm={12}>
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
              </Col>
            </Row>
          </div>
        </div>




        <div className="popup-weather-details">
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
              </div>
            </Col>
            <Col lg={1} sm={12}>
              {" "}
              <hr className="weather-details-divider" />
            </Col>
            <Col lg={3} sm={12}>
              {" "}
              <div className="weather-details-center">
                <p>
                  <NearMeOutlinedIcon /> {windspeed} m/s {degree} degree
                </p>
              </div>
            </Col>
            <Col lg={1} sm={12}>
              {" "}
              <hr className="weather-details-divider" />
            </Col>
            <Col lg={3} sm={12}>
              {" "}
              <div className="weather-details-right">
                <div className="sunrise-sunset">
                  <p>
                    <b>Sunrise:</b>
                    {sunrise}
                  </p>
                  <p>
                    <b>Sunset:</b> {sunset}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Dialog>
  );
};

export default Popup;
