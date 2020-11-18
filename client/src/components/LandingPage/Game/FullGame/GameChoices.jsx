/*jshint esversion: 6 */
import React, { useEffect, useState } from 'react';
import './GameChoices.css';
import swal from 'sweetalert';
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
  const [newQuote, setNewQuote] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(0);
  const [score, setScore] = useState(0);
  let randomQuote;
  let randomAuthor;
  let author;

  useEffect(() => {
    fetch('https://breakingbadapi.com/api/quote/random')
      .then((response) => response.json())
      .then((data) => {
        randomQuote = data[0].quote;
        randomAuthor = data[0].author;
        let stringArray = randomAuthor.split(' ');
        author = stringArray[0] + '+' + stringArray[1];
        setQuote(data[0].quote);
        fetch(`https://breakingbadapi.com/api/characters?name=${author}`)
          .then((response) => response.json())
          .then((data) => {
            setImage(data[0].img);
            setName(data[0].name);
            let name = data[0].name;
          });
      })
      .then(
        fetch(`https://breakingbadapi.com/api/character/random`)
          .then((random) => random.json())
          .then((randomdata) => {
            setNameOne(randomdata[0].name);
            setImageOne(randomdata[0].img);
          })
      )
      .then(
        fetch(`https://breakingbadapi.com/api/character/random`)
          .then((randomone) => randomone.json())
          .then((randomdataone) => {
            setNameTwo(randomdataone[0].name);
            setImageTwo(randomdataone[0].img);
          })
      )
      .then(
        fetch(`https://breakingbadapi.com/api/character/random`)
          .then((randomtwo) => randomtwo.json())
          .then((randomdatatwo) => {
            setNameThree(randomdatatwo[0].name);
            setImageThree(randomdatatwo[0].img);
          })
      );
  }, [click]);
  let answer;
  answer = [
    [name, image],
    [nameOne, imageOne],
    [nameTwo, imageTwo],
    [nameThree, imageThree]
  ];
  answer.sort(function () {
    return 0.5 - Math.random();
  });
  const handleAnswerOptionClick = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.innerText);
    if (event.currentTarget.innerText === name) {
      swal('Right!');
      setScore(score + 1);
      setCount(0);
      setClick(click + 1);
    } else {
      swal('Wrong!');
      setCount(count + 1);
      setClick(click + 1);
      if (count === 3) {
        swal('Game Over!');
        window.location = '/game-start';
      }
    }
  };
  return (
    <div>
      <h2 className="who-said">Who said...</h2>
      <div className="game-status-bar">
        <p className="quote-box">
          <em>"{quote}"</em>
        </p>
        <div className="score-box">
          <h1>Score:</h1>
          <span className="score-number"> {score} </span>
        </div>
      </div>
      <div className="game-options-container">
        <div className="options-row options-one">
          <button
            className="game-option option-one"
            onClick={handleAnswerOptionClick}
          >
            <h3>{answer[0][0]}</h3>
            <img
              src={answer[0][1]}
              alt="random character from Breaking Bad for user to select from"
            />
          </button>
          <button
            type="submit"
            className="game-option option-two"
            onClick={handleAnswerOptionClick}
          >
            <h3>{answer[1][0]}</h3>
            <img
              src={answer[1][1]}
              alt="random character from Breaking Bad for user to select from"
            />
          </button>
        </div>
        <div className="options-row options-three">
          <button
            type="submit"
            className="game-option option-one"
            onClick={handleAnswerOptionClick}
          >
            <h3>{answer[2][0]}</h3>
            <img
              src={answer[2][1]}
              alt="random character from Breaking Bad for user to select from"
            />
          </button>
          <button
            type="submit"
            className="game-option option-four"
            onClick={handleAnswerOptionClick}
          >
            <h3>{answer[3][0]}</h3>
            <img
              src={answer[3][1]}
              alt="random character from Breaking Bad for user to select from"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export default GameChoices;
