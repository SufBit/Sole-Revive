import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const shoeCard = ({ shoeName, price,size, link }) => {
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{shoeName}</Card.Title>
      <Card.Text>
        Price: {price}
      </Card.Text>
      <Card.Text>
          Size: {size}
      </Card.Text>
      <Button  as = {Link} to = "/ShoeDisplay" variant="primary" href={link} >View</Button>
    </Card.Body>
  </Card>
  );
};

export default shoeCard;