import Figure from 'react-bootstrap/Figure';

export const ShoeDisplay = () => {

return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Figure style={{ marginLeft: '6rem' }}>
        <Figure.Caption style={{ marginBottom: '1rem', textAlign: 'center', float: 'right'}}>
          <h2><strong>Shoe name</strong></h2>
          <h4>Desciption here</h4>
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