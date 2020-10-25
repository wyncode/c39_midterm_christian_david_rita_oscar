import React from 'react';
import GameStatusBar from './GameStatusBar';
import GameChoices from './GameChoices';

function FullGame() {
  return (
    <div className="full-game">
      <GameStatusBar />
      <GameChoices />
    </div>
  );
}

export default FullGame;
