import React from 'react';
import './GameStatusBar.css';


function GameStatusBar() {
  return (
    <div>
      <h1>Test Your Knowledge</h1>
      <h3>Question 1</h3>
      <h5>Who said...</h5>
      <div className="game-status-bar">
        <blockquote className="quote-box">Quote Goes Here</blockquote>
        <div className="score-box">
          <h5>Score</h5>
          <span>5</span>
        </div>
      </div>
    </div>
  );
}

export default GameStatusBar;
