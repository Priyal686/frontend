import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css"

var CarouselImages = () => {
  return (
    <>
     <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="./lib.jpg"
      alt="library slide"
    />
    <Carousel.Caption>
      <h3>College Library</h3>
      <p>With education as our focus here at The Best Colleges, we obviously love libraries. College libraries, public libraries, private libraries — whatever and wherever they are, we love them all</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="./clgfest.jpeg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>College Festival</h3>
      <p>At this youth festival students interested and those who are talented in cultural activities like music, drama, elocution, dance, fine arts etc. are selected.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./conf.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>The conference </h3>
      <p>The conference is an important event among number of activities identified for the celebrations of Azadi Ka Amrit Mohotsav, the 75th anniversary of Indian Independence .</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  );
};
export default CarouselImages;
