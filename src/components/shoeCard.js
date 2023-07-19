import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const shoeCard = ({ shoe, isSubscribed}) => {
  return (
  <Card style={{ width: '18rem' , height: '400px'}}>
    <div style={{ height: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
      <Card.Img variant="top" src= {shoe.image} style={{ objectFit: 'cover', width: '100%', maxHeight: '100%' }} />
    </div>
    <Card.Body>
      <Card.Title>{shoe.name}</Card.Title>
      <Card.Text>
        {/* Price: ${shoe.price} */}
          {isSubscribed ? (
        <>
          <span>Subscription Price: </span>
          {shoe.subPrice}
        </>
      ) : (
        <>
          <span>Price: </span>
          {shoe.price}
        </>
      )}
      </Card.Text>
      <Card.Text>
          Size: {shoe.size}
      </Card.Text>
      <Card.Text>
          Condition: {shoe.condition}
      </Card.Text>
      <Button as={Link} to={{ pathname: `/shoes/${shoe.id}/${isSubscribed}` }} variant="primary">
        View
      </Button>

    </Card.Body>
  </Card>
  );
};

export default shoeCard;