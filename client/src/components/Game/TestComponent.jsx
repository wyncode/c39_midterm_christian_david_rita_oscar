import React from 'react';
import { useState, useEffect } from 'react';

function Testcomponent() {
  const [image, setImage] = useState({});

  useEffect(() => {
    fetch('https://breakingbadapi.com/api/character/random')
      .then((response) => response.json())
      .then((response) => setImage(response[0].img));
  }, []);

  function switchCharacter() {
    setImage(image);
  }

  return (
    <div>
      <h1>TestComponent</h1>
      <img src={image} />
      <button onClick={switchCharacter}>Click to Switch</button>
    </div>
  );
}

export default Testcomponent;
