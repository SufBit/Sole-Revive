import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SellDataPage() {
  const [sellData, setSellData] = useState([]);

  useEffect(() => {
    // Fetch the sell data from the backend API
    fetch('http://localhost:3001/api/sell/items')
      .then((response) => response.json())
      .then((data) => {
        setSellData(data);
      })
      .catch((error) => {
        console.error('Error fetching sell data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Sold items</h1>
      <Row>
        {sellData.map((item) => (
          <Col key={item.name} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Estimated Offer Price: {item.price}</Card.Text>
                <Card.Text>Condition: {item.condition}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SellDataPage;
