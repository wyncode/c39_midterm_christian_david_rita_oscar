import React from 'react';
import { Button } from 'react-bootstrap';
import './GameButton.css';

function GameButton() {
  return (
    <div>
      <Button variant="primary" className="game-button">
        Test Your Knowledge
      </Button>{' '}
    </div>
  );
}

export default GameButton;
