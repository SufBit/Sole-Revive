import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  const carouselArrowStyle = {
    color: 'black', // Set the color to black or any desired color
    fontSize: '24px', // Adjust the font size as needed
  };
  return (
    <Carousel prevIcon={<span className="carousel-arrow" style={carouselArrowStyle}>&lsaquo;</span>}
    nextIcon={<span className="carousel-arrow" style={carouselArrowStyle}>&rsaquo;</span>}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/shoe1.jpg"
          alt="First slide"
          style={{ height: '875px', objectFit: 'cover' }}
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
          style={{ height: '875px', objectFit: 'cover' }}
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
          style={{ height: '875px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Third shoe name</h3>
          <p>Our Third shoe!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;