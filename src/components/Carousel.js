import Carousel from 'react-bootstrap/Carousel';
import StarRating from './StarRating';

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
        <Carousel.Caption style = {{color: 'black'}}>
          <h3><StarRating/></h3>
          <p>"A shining star in the footwear industry!" - Times Square</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/shoe2.jpg"
          alt="Second slide"
          style={{ height: '875px', objectFit: 'cover' }}
        />
        <Carousel.Caption style = {{color: 'black'}}>
          <h3><StarRating/></h3>
          <p>"A top-rated shoe seller with a passion for restoring footwear to its former glory,
             setting the standard for excellence in refurbishment." - Yelp</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/shoe3.jpg"
          alt="Third slide"
          style={{ height: '875px', objectFit: 'cover' }}
        />
        <Carousel.Caption style = {{color: 'black'}}>
          <h3><StarRating/></h3>
          <p>"A top-notch shoe shopping destination, delivering 5-star style and exceptional service!" - Consumer Reports</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;