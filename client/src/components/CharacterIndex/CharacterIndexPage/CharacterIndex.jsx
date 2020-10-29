import React, { useEffect, useState } from 'react';

import './CharacterIndex.css';

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

  function characterCards(loopVar) {
    return loopVar.map((character) => {
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
  }

  const displayAllCharacters = () => {
    characterCards(characterList);
    console.log('displayallchars has run');
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
          <button onClick={() => sortAToZ()}>Sort A → Z</button>
          <button onClick={() => sortZToA()}>Sort Z → A</button>
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
              onClick={() => displayAllCharacters()}
            >
              See All Characters
            </button>
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
          ? characterCards(characterList)
          : characterCards(charactersFiltered)}
      </div>
    </div>
  );
};

export default CharacterIndex;
