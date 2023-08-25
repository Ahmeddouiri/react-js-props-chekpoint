import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Player({name,team,nationality,age,jerseyNumber,image}) {

  
    return (
      <div >
         <Card style={{ width: '18rem'  }} >
      <Card.Img variant="top" style={{height:'180px'}} src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{team}</ListGroup.Item>
        <ListGroup.Item>{nationality}</ListGroup.Item>
        <ListGroup.Item>{jerseyNumber}</ListGroup.Item>
        <ListGroup.Item>{age}</ListGroup.Item>
      </ListGroup>
      
    </Card>
    
      </div>
    );
  }
  
  export default Player;
  