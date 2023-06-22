import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const shoeCard = ({ shoeName, price, link }) => {
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{shoeName}</Card.Title>
      <Card.Text>
        Price: {price}
      </Card.Text>
      <Button variant="primary" href={link}>Go somewhere</Button>
    </Card.Body>
  </Card>
  );
};

export default shoeCard;