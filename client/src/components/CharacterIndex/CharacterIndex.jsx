import React from 'react';
import { Form, Dropdown, ButtonGroup, Button, Card } from 'react-bootstrap';

const CharacterIndex = () => {
  return (
    <div>
      <h1>Character Index Page Goes Here</h1>
      <Form>
        <Form.Label>Search by Name</Form.Label>
        <Form.Control
          className="character-search"
          type="text"
          placeholder="Search by name"
        />
      </Form>
      <div className="dropdowns">
        <Dropdown as={ButtonGroup}>
          <Button variant="success">Sort A -> Z</Button>

          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">A -> Z</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Z -> A</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://images.homedepot-static.com/productImages/2271ed2f-8ce4-4547-9cf2-a04beb1cb38d/svn/nearly-natural-artificial-plants-6328-64_1000.jpg"
          />
          <Card.Body>
            <Card.Title>Walter White</Card.Title>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CharacterIndex;
