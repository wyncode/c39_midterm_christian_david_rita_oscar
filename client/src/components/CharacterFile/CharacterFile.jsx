import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './CharacterFile.css';

function CharacterFile(props) {
  const [dataFiles, setDataFiles] = useState({
    char_id: 56,
    name: '',
    birthday: 'Unknown',
    occupation: ['APD Officer'],
    img: '',
    status: 'Alive',
    nickname: 'Saxton',
    appearance: [3],
    portrayed: 'Stoney Westmoreland',
    category: 'Breaking Bad',
    better_call_saul_appearance: []
  });
  const [dataQuote, setDataQuote] = useState({});

  console.log(useLocation().pathname);

  let characterID = Number(useLocation().pathname.slice(16));
  characterID > 0
    ? (characterID = characterID - 1)
    : (characterID = characterID);
  console.log(characterID);
  if (characterID == 111) {
    characterID = 57;
  }
  if (characterID == 112) {
    characterID = 58;
  }
  if (characterID == 113) {
    characterID = 59;
  }
  if (characterID == 114) {
    characterID = 60;
  }
  if (characterID == 115) {
    characterID = 61;
  }
  if (characterID == 116) {
    characterID = 62;
  }

  // id = Number(id);
  // let id = location.pathname.splice(0, 16);

  // let { char_id } = useParams;

  // console.log(char_id); // wy print ing three timnes? does it matter? why undefined?

  useEffect(() => {
    // const dataPull = () => {
    fetch('https://breakingbadapi.com/api/characters')
      .then((response) => response.json())
      .then((data) => {
        let characterObject = data[characterID];

        setDataFiles(characterObject);
      });
    // setDataFiles();
    // console.log(data[Math.floor(Math.random() * data.length)]);
    // fetch('https://breakingbadapi.com/api/quote/random?author')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setDataQuote(data);
    //     console.log(data);
  }, []);
  // }, []);
  // };
  // , [];

  // fetch("https://breakingbadapi.com/api/quote/random?author=Skyler+White")
  //         .then((response) => response.json())
  //         .then((data) => {
  //             randomQuote = data[0].quote;
  //             randomAuthor = data[0].author;
  //             let stringArray = randomAuthor.split(" ")
  //             author = stringArray[0]+"+"+stringArray[1]
  //             console.log(author);
  //             console.log(data[0].quote);
  //             setQuote(data[0].quote);
  //             fetch(`https://breakingbadapi.com/api/characters?name=${author}`)
  //             .then((response) => response.json())
  //             .then((data) => {
  //               console.log(data[0].img);
  //               setImage(data[0].img);
  //               setName(data[0].name);
  //             })

  return (
    <div className="filecontainer">
      <div>
        <h1>{dataFiles.name}</h1>
      </div>
      <div className="filecard">
        <div className="cardImage">
          <img src={dataFiles.img} alt="character"></img>
        </div>
        <div className="carddata">
          <div className="leftfilecard">
            <div id="characterdata">
              <h1>About</h1>
              <p id="name">Nickname: {dataFiles.nickname}</p>
              <p id="age">Status: {dataFiles.status}</p>
              <p id="deaths">Occupation: {dataFiles.occupation}</p>
              <p id="description"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="quotecontainer">
        <div className="quotebox">
          <h1>Quote</h1>
          <p>dkdkdkdkd</p>
        </div>
        <div>
          <button className="quotebutton">New Quote</button>
        </div>
      </div>
    </div>
  );
}
export default CharacterFile;
