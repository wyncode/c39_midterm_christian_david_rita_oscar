import React from 'react';
import { Form } from 'react-bootstrap';

function CharacterIndexSearchBar(props) {
  return (
    <div>
      <Form type="text" onSubmit={props.handleSearchProp}>
        <Form.Row>
          <Form.Control></Form.Control>
        </Form.Row>
      </Form>
    </div>
  );
}

export default CharacterIndexSearchBar;
