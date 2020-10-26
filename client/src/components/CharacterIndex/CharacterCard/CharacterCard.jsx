import React from 'react';
import { Form, Dropdown, ButtonGroup, Button, Card } from 'react-bootstrap';

function CharacterCard(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          className="character-image"
          variant="top"
          src={props.imageURL}
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CharacterCard;
