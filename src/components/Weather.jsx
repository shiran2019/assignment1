
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import Clooounds from "./cloounds.png"
import { Container } from 'react-bootstrap';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';

export const Weather = (props) => {
  const {city,temp,date,desc,pressure,humidity,visibility,temp_min,temp_max,windspeed,degree,sunrise,sunset} = props;
  return (

<div style={{marginTop:"50px",marginLeft:"20px"}}>
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia style={{backgroundColor:"#388ee7",height:"250px"}}
        sx={{ height: 140 }}
        image  ={Clooounds}
        title="green iguana"
        
      >
        <Container fluid style={{padding:"20px",color:"white",fontFamily:"inter"}}>
        <Row  >
            <Col >
            <p style={{fontSize:"30px"}}><b>{city} </b></p>
            <p>{date}</p>
            </Col>
            <Col>
           <p style={{fontSize:"50px"}}> <b>{temp}&deg;C </b></p> 
            </Col>
        </Row>
        <Row >
            <Col style={{padding:"20px 0px"}}>
           <p > <CloudQueueOutlinedIcon/> <b> {desc} </b> </p>  
            </Col>
            <Col>
            <p><b>Temp min : {temp_min}&deg;C</b></p>
            <p> <b>Temp max : {temp_max}&deg;C</b></p>
            </Col>
        </Row>
        </Container>
        </CardMedia>

      <CardContent style={{color:"white" , backgroundColor:"#383b47",fontFamily:"inter"}}>
<Row>

<Col>
<p><b>Presure: </b> {pressure} hpa</p>
<p><b>Humidity:</b> {humidity} %</p>
<p><b>Visibility:</b> {visibility} km</p>
</Col>
<hr style={{width:"10px",height:"100px"}}></hr>
<Col style={{padding:"12px"}}>
<center><NearMeOutlinedIcon/></center>
<center><p>{windspeed} m/s { degree} degree</p></center>
</Col>


<Col>
<p><b>Sunrise:</b> {sunrise}</p>
<p><b>Sunset:</b> {sunset}</p>
</Col>

{/* #6249cc - broken -purple
#40b681 - clear sky - green
#de944e - light rain - orange
#9c3a3a - heavy rain - red */}

        {/* <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography> */}
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
        </Row>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

    </div>
  );
}