import Figure from 'react-bootstrap/Figure';
import { Accordion } from 'react-bootstrap';
import { Button, ButtonGroup} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';

export const ShoeDisplay = () => {

  const [selectedShoe, setSelectedShoe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchShoeDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/sneakers/${id}`);
        const data = await response.json();
        setSelectedShoe(data);
      } catch (error) {
        console.error('Error fetching shoe details:', error);
      }
    };
  
    fetchShoeDetails();
  }, [id]);

  useEffect(() => {
    toast.configure();
  }, []);

  if (!selectedShoe) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = async () => {
    if (selectedShoe) {
      try {
        const response = await fetch(`http://localhost:3001/api/sneakers/${selectedShoe.id}/cart`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(selectedShoe),
        });
        if (response.ok) {
          // Item added to cart successfully
          toast.success('Item added to cart', { autoClose: 2000 });
        } else {
          console.error('Error adding item to cart');
        }
      } catch (error) {
        console.error('Error adding item to cart:', error);
      }
    }
  };


return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Figure style={{ marginLeft: '6rem' }}>
        <Figure.Caption style={{ marginBottom: '1rem', marginLeft: '9rem', textAlign: 'center', float: 'right'}}>
          <div style = {{padding: '4rem'}}>  
          <div>
    {selectedShoe ? (
      <div>
        <h2><strong>{selectedShoe.name}</strong></h2>
        <h3><p>Price: ${selectedShoe.price}</p></h3>
        <h3><p>Size: {selectedShoe.size}</p></h3>
        {/* Additional shoe details */}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
          </div>
      <div>
        
      <ButtonGroup className="mt-2" style = {{padding: '2rem'}}>
        <Button variant="primary" onClick={handleAddToCart}>Add to cart</Button>
        <Button variant="secondary">Add to wishlist</Button>
      </ButtonGroup>
      <Accordion style = {{marginTop: '3rem'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>About this item</Accordion.Header>
        <Accordion.Body>
          Display shoe information here
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Shipping and Handling</Accordion.Header>
        <Accordion.Body>
          Display shipping and handling options/policy here
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
        </Figure.Caption>
        
        <Figure.Image
          width={684}
          height={720}
          alt="171x180"

          src={selectedShoe.image}
        />
      </Figure>
      <ToastContainer position="top-center" />
    </div>
  );
  
  
}