import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './GameStart.css';

const GameStart = () => {
  return (
    <div class='gamestarts-page'>
      <div class="gamestarts">
        <h1 class="title">Test Your Knowledge</h1>

        <div class="startquiz">
          <h2>Game Rules</h2>

          <div class="rulesbox">
            <ol class>
              <li>
                You are given 4 characters.
              </li>
              <li>
              Click on the character the quote applies
                to.
              </li>
              <li>Each player is only allowed 2 wrong answers.</li>
              <li>Try to reach the highest score!</li>
            </ol>
          </div>
          <div class="box">
            <a href="/lets-play" class="startgame" >START</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameStart;
