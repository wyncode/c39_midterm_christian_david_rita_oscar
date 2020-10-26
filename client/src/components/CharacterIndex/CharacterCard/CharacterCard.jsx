import React from 'react';
import { Form, Dropdown, ButtonGroup, Button, Card } from 'react-bootstrap';

function CharacterCard() {
  return (
    <div>
      <Card style={{ width: '18rem' }} className="character-card">
        <Card.Img
          className="character-image"
          variant="top"
          src="https://images.halloweencostumes.com/products/43389/1-2/cactus-costume-for-adults.jpg"
        />
        <Card.Body>
          <Card.Title>Name Here</Card.Title>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CharacterCard;
