import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from "react-slideshow-image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import one from "../images/8.jpg";
import two from "../images/4.jpg";
import three from "../images/10.jpg";
import { Divider, Typography, Box, Container, Grid } from "@material-ui/core";
import Gallery from "react-grid-gallery";
import { IMAGES } from "./config";
import { Fragment } from "react";



function Homepage() {
  return (
    <div className="Homepage">
      <Carousel />
      <Divider />
      <div>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ textAlign: 'center', pt: '1em', pb: '1em' }}>Wedding Photography</Typography>
          <Typography variant="body1" sx={{ mx: "auto", pb: '1em' }}>
            Wedding is the most memorable and precious moment of anyone’s life.
            We want to seize and retain your happiest time forever. Biggest
            quality and weakness of time is that it passes. With every passing
            moment, it takes away cherishable memories. We cannot hold time. Our
            passion for photography provided us an opportunity to capture all
            the best moments we witness. We feel privileged to make these
            moments real and give them eternal life through our captures. Indian
            wedding is a festival of happiness, fun, smile, laughter, emotions,
            tears, hopes, crazy couple poses and customs. Our job is not just to
            make portraits for you. Our focus is to secure all these priceless
            memories with artistic and creative excellence. Our portfolio
            includes south Indian, Kerala, Chennai, Bengali, Tamil, Marathi and
            Punjabi - Pre wedding, main event, candid and outdoor Destination
            photography. We believe that the best professional photographer is
            the one who takes you back in the time as far as important events
            are concerned. Let’s convert your happy moments to memories to
            remember for the rest of your life.
          </Typography>
        </Container>
      </div>
      <Grid container >
        <Grid item xs={12}>
          <Gallery images={IMAGES} rowHeight={480} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;

const Carousel = (props) => {
  return <Fragment>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-flex align-items-center justify-content-center min-vw-100">
            <img class="d-block w-100" style={{maxHeight:"80vh"}} src={one} alt="First slide" />
          </div>
        </div> 
        <div class="carousel-item">
          <div class="d-flex align-items-center justify-content-center min-vw-100">
            <img class="d-block w-100" src={two} alt="Second slide" />
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex align-items-center justify-content-center min-vw-100">
            <img class="d-block w-100" src={three} alt="Third slide" />
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </Fragment>
}