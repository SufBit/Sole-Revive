import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/shoe1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First shoe name</h3>
          <p>Our First shoe!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/shoe2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second shoe name</h3>
          <p>Our Second shoe!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/shoe3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third shoe name</h3>
          <p>
          Our Third shoe!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;