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
// pass the whole character array as props to CharacterFile? this would eliminate the load time and empty image

// filter out characters that don't match user's selected season input

// give user dropdown button with options to check seasons, then click "apply".
// "Apply" should submit a form that populates an array (fills empty array, or replaces array [1, 2, 3, 4, 5])
// function should have a for loop that iterates over seasons array, and for each season, another for loop which
// iterates over the API response array of full characters
// for each character, if their "appearances" property contains the season, that character object should be added to a "toAppear" array
// the "to Appear" should repalce the charArray as current state
// the dropdown button should

const CharacterIndex = () => {
  const [characterList, setCharacterList] = useState([]);
  const [state, setState] = useState(true);
  const [charactersFiltered, setCharactersFiltered] = useState([]);

  const changeSeasonsFilter = (seasonNumber) => {
    let results = characterList.filter(
      (item) => item.appearance && item.appearance.includes(seasonNumber)
    );
    setCharactersFiltered(results);
  };

  const CharacterCards = (loopVar) => {
    return loopVar.map((character) => {
      //fixthis if (characterList[0].img)
      return (
        <a id="card-link-tag" href={`/character-file/${character.char_id}`}>
          <div id="character-card" className="card">
            <h5 className="card-title">{character.name}</h5>
            <img
              src={character.img}
              className="card-img-top"
              alt={character.name}
            />
          </div>
        </a>
      );
    });
  };

  const sortAToZ = () => {
    setCharacterList(characterList.sort((a, b) => (a.name > b.name ? 1 : -1)));
    setState(!state);
  };

  const sortZToA = () => {
    setCharacterList(characterList.sort((a, b) => (a.name > b.name ? -1 : 1)));
    setState(!state);
  };

  useEffect(async () => {
    let response = await fetch('https://breakingbadapi.com/api/characters');
    response = await response.json();
    let charArray = [];
    for (let i = 0; i < response.length; i++) {
      if (
        response[i].char_id !== 39 &&
        response[i].char_id !== 117 &&
        response[i].char_id !== 112 &&
        response[i].char_id !== 113 &&
        response[i].char_id !== 114 &&
        response[i].char_id !== 115 &&
        response[i].char_id !== 116
      ) {
        charArray.push(response[i]);
      }
    }
    setCharacterList(charArray);
  }, []);

  return (
    <div className="character-index-page-container">
      <h1>Characters</h1>

      <div className="buttons-container">
        <div className="alphabetical-sort">
          <button onClick={() => sortAToZ()}>Sort A -> Z</button>
          <button onClick={() => sortZToA()}>Sort Z -> A</button>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter by Season
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button
              class="dropdown-item"
              type="button"
              onClick={() => changeSeasonsFilter(1)}
            >
              Season 1
            </button>
            <button
              class="dropdown-item"
              type="button"
              onClick={() => changeSeasonsFilter(2)}
            >
              Season 2
            </button>
            <button
              class="dropdown-item"
              type="button"
              onClick={() => changeSeasonsFilter(3)}
            >
              Season 3
            </button>
            <button
              class="dropdown-item"
              type="button"
              onClick={() => changeSeasonsFilter(4)}
            >
              Season 4
            </button>
            <button
              class="dropdown-item"
              type="button"
              onClick={() => changeSeasonsFilter(5)}
            >
              Season 5
            </button>
          </div>
        </div>
      </div>

      <div className="character-cards-container">
        {charactersFiltered.length === 0
          ? CharacterCards(characterList)
          : CharacterCards(charactersFiltered)}
      </div>
    </div>
  );
};

export default CharacterIndex;
