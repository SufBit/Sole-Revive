import Figure from 'react-bootstrap/Figure';
import { Accordion } from 'react-bootstrap';
import { Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

export const ShoeDisplay = () => {

return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Figure style={{ marginLeft: '6rem' }}>
        <Figure.Caption style={{ marginBottom: '1rem', marginLeft: '9rem', textAlign: 'center', float: 'right'}}>
          <div style = {{padding: '4rem'}}>  
          <h2><strong>Shoe name</strong></h2>
          <h4>Desciption here</h4>
          </div>
          <div>
      <DropdownButton id="dropdown-basic-button" title="Choose Size">
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </DropdownButton>
      <ButtonGroup className="mt-2" style = {{padding: '2rem'}}>
        <Button variant="primary">Add to cart</Button>
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
          src="/images/shoe1.jpg"
        />
      </Figure>
    </div>
  );
  
  
}