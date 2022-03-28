import React from "react";
import { Carousel } from "react-bootstrap";

function BootstrapCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: 700 }}
            src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/the-last-supper-vicente-juan-macip.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ height: 700 }}
            src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/the-last-supper-vicente-juan-macip.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 700 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYKYXXgiSisdL3z9fjxS0kEz6CLpMbvtq6A&usqp=CAU"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default BootstrapCarousel;
