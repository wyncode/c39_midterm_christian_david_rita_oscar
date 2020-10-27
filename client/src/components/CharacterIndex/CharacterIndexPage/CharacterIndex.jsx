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

// filter out characters that don't match user's selected season input

// give user dropdown button with options to check seasons, then click "apply".
// "Apply" should submit a form that populates an array (fills empty array, or replaces array [1, 2, 3, 4, 5])
// function should have a for loop that iterates over seasons array, and for each season, another for loop which
// iterates over the API response array of full characters
// for each character, if their "appearances" property contains the season, that character object should be added to a "toAppear" array
// the "to Appear" should repalce the charArray as current state

const CharacterIndex = () => {
  const [characterList, setCharacterList] = useState([]);
  const [state, setState] = useState(true);

  let seasonsFilter = [5];
  let toInclude = [];

  const filterSeasons = () => {
    toInclude = [];
    seasonsFilter.forEach((season) => {
      characterList.forEach((character) => {
        if (
          character.appearance !== null &&
          character.appearance.includes(season)
        ) {
          toInclude.push(character);
        }
      });
    });
    console.log(toInclude);
    setCharacterList(toInclude);
    setState(!state);
  };

  // filterSeasons();
  // setCharacterList(toInclude);
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
      charArray.push(response[i]);
    }
    setCharacterList(charArray);
  }, []);

  useEffect(() => {}, [state]);

  return (
    <div className="character-index-page-container">
      <h1>CharacterIndex Page</h1>
      <div className="buttons-container">
        <button onClick={() => sortAToZ()}>Sort A -> Z</button>
        <button onClick={() => sortZToA()}>Sort Z -> A</button>
        <button onClick={() => filterSeasons()}>Season 5 only</button>
      </div>

      <div className="character-cards-container">
        {characterList.map((character) => {
          return (
            <a href={`/character-file/${character.char_id}`}>
              <div className="character-card">
                <h5>{character.name}</h5>

                <img
                  className="character-image"
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
