import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './CharacterIndex.css';
import TestCharPage from './TestCharPage';
import CharacterFile from '../../CharacterFile/CharacterFile';

// handle Holly (remove from state variable before passing?) & handle "Ortgea"
// serve error messages for 503s?
// reduce delay when clicking sort by creating static array from api call then sorting that array instead of calling api every time sort is clicked
// left-right scroll is auto-enabled?
// fix overflow of image (e.g. hector and leonel salamanca overflow b/c title is two )
// stacey appears twice (55 & 117)
// creat if statements to account for characters whose ids are out of order
// get rid of auto-0render walter before character index page loads

const CharacterIndex = () => {
  const [character, setCharacter] = useState([]);
  const [state, setState] = useState(true);

  const sortAToZ = () => {
    setCharacter(character.sort((a, b) => (a.name > b.name ? 1 : -1)));
    setState(!state);
  };

  const sortZToA = () => {
    setCharacter(character.sort((a, b) => (a.name > b.name ? -1 : 1)));
    setState(!state);
  };

  useEffect(async () => {
    let response = await fetch('https://breakingbadapi.com/api/characters');
    response = await response.json();
    let charArray = [];
    for (let i = 0; i < response.length; i++) {
      charArray.push(response[i]);
    }
    setCharacter(charArray);
  }, []);

  return (
    <div class="character-index-page-container">
      <h1>CharacterIndex Page</h1>
      <div class="buttons-container">
        <button onClick={() => sortAToZ()}>Sort A -> Z</button>
        <button onClick={() => sortZToA()}>Sort Z -> A</button>
      </div>

      <div class="character-cards-container">
        {character.map((character) => {
          return (
            <a href={`/character-file/${character.char_id}`}>
              <div className="character-card">
                <h5>{character.name}</h5>

                <img
                  class="character-image"
                  src={character.img}
                  alt={character.name}
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterIndex;
