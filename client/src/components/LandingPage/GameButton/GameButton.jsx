import React from 'react';
import { Button } from 'react-bootstrap';
import './GameButton.css';

function GameButton() {
  return (
    <div className="game-button-div">
      <Button variant="primary" className="game-button">
        Test Your Breaking Bad Knowledge
      </Button>{' '}
    </div>
  );
}

export default GameButton;
