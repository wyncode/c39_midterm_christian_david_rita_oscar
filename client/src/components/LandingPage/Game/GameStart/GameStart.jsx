import React from 'react';
import './GameStart.css';

const GameStart = () => {
  return (
    <div class="gamestart">
      <h1 class="title">Test Your Knowledge</h1>

      <div class="startquiz">
        <h2>Game Rules</h2>

        <div class="rulesbox">
          <ol class>
            <li>
              There is 4 characters. Click on the character the quote applies
              to.
            </li>
            <li>Each player is only allowed 2 wrong answers</li>
            <li>Try to reach the highest score!</li>
            <li>
              If you need some review, hit the character index above
              <img
                id="arrow"
                src="https://www.flaticon.com/svg/static/icons/svg/65/65387.svg"
                alt="arrow"
              />{' '}
              to refresh on your Breaking Bad!!!
            </li>
          </ol>
        </div>
        <div class="box">
          <button class="startgame" href="./game-url">
            START
          </button>
        </div>
      </div>
    </div>
  );
};
export default GameStart;
