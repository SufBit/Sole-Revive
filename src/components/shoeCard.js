import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const shoeCard = ({ shoe}) => {
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {shoe.image} />
    <Card.Body>
      <Card.Title>{shoe.name}</Card.Title>
      <Card.Text>
        Price: ${shoe.price}
      </Card.Text>
      <Card.Text>
          Size: {shoe.size}
      </Card.Text>
      <Card.Text>
          Condition: {shoe.condition}
      </Card.Text>
      <Button as={Link} to={`/shoes/${shoe.id}`} variant="primary">View</Button>
    </Card.Body>
  </Card>
  );
};

export default shoeCard;