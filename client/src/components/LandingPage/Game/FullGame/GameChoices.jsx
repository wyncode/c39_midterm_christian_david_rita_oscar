import React, { useEffect, useState } from 'react';
import './GameChoices.css';


function GameChoices() {
const [image, setImage] = useState();
const [name, setName] = useState();
const [imageOne, setImageOne] = useState();
const [nameOne, setNameOne] = useState();
const [imageTwo, setImageTwo] = useState();
const [nameTwo, setNameTwo] = useState();
const [imageThree, setImageThree] = useState();
const [nameThree, setNameThree] = useState();
const [quote, setQuote] = useState();


  let randomQuote;
  let randomAuthor;
  let author;

    useEffect(() =>
    {        fetch("https://breakingbadapi.com/api/quote/random")
            .then((response) => response.json())
            .then((data) => {
                randomQuote = data[0].quote;
                randomAuthor = data[0].author;
                let stringArray = randomAuthor.split(" ")
                author = stringArray[0]+"+"+stringArray[1]
                console.log(author);
                console.log(data[0].quote);
                setQuote(data[0].quote);
                fetch(`https://breakingbadapi.com/api/characters?name=${author}`)
                .then((response) => response.json())
                .then((data) => {
                  console.log(data[0].img);
                  setImage(data[0].img);
                  setName(data[0].name);
                })
              
            })
            .then(fetch(`https://breakingbadapi.com/api/character/random`)
            .then((random) => random.json())
            .then((randomdata) => {
              console.log(randomdata[0].name);
              console.log(randomdata[0].img);
              setNameOne(randomdata[0].name);
              setImageOne(randomdata[0].img);
            }))

            .then(fetch(`https://breakingbadapi.com/api/character/random`)
            .then((randomone) => randomone.json())
            .then((randomdataone) => {
              console.log(randomdataone[0].name);
              console.log(randomdataone[0].img);
              setNameTwo(randomdataone[0].name);
              setImageTwo(randomdataone[0].img);
            }))

            .then(fetch(`https://breakingbadapi.com/api/character/random`)
            .then((randomtwo) => randomtwo.json())
            .then((randomdatatwo) => {
              console.log(randomdatatwo[0].name);
              console.log(randomdatatwo[0].img);
              setNameThree(randomdatatwo[0].name);
              setImageThree(randomdatatwo[0].img);
            }))

        },[])


  return (
    <div>
      <h1>Test Your Knowledge</h1>
      <h3>Question 1</h3>
      <h5>Who said...</h5>
      <div className="game-status-bar">
        <p className="quote-box">{quote}</p>
        <div className="score-box">
          <h5>Score</h5>
          <span>5</span>
        </div>
      </div>


    <div className="game-options-container">
      <div className="options-row options-one">
        <div className="game-option option-one">
          <h3>{name}</h3>
          <img src={image} alt="random character from Breaking Bad for user to select from"/>
        </div>
        <div className="game-option option-two">
          <h3>{nameOne}</h3>
          <img src={imageOne} alt="random character from Breaking Bad for user to select from"/>
        </div>
      </div>
      <div className="options-row options-three">
        <div className="game-option option-one">
          <h3>{nameTwo}</h3>
          <img src={imageTwo} alt="random character from Breaking Bad for user to select from"/>
        </div>
        <div className="game-option option-four">
          <h3>{nameThree}</h3>
          <img src={imageThree} alt="random character from Breaking Bad for user to select from"/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default GameChoices;
