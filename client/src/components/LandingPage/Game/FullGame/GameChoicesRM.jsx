/*jshint esversion: 6 */

import React, { useEffect, useState } from 'react';
import './GameChoices.css';
import GameStart from './GameStart/GameStart';

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
  const [randomAuthor, setRandomAuthor] = useState('');
  const [refetch, setRefetch] = useState(false);
  const [count, setCount] = useState(0);

  const fetchQuote = async () => {
    const response = await fetch('https://breakingbadapi.com/api/quote/random');
    const data = await response.json();
    if (
      !data[0].author ||
      data[0].author === 'Jimmy McGill' ||
      data[0].author === 'Gus Fring'
    ) {
      setRefetch(!refetch);
    }
    setQuote(data[0].quote);
    setRandomAuthor(data[0].author);
    const imgResponse = await fetch(
      `https://breakingbadapi.com/api/characters?name=${data[0].author}`
    );
    const imgData = await imgResponse.json();
    if (imgData.length > 0) {
      setName(imgData[0].name);
      setImage(imgData[0].img);
    }
    const res1 = await fetch('https://breakingbadapi.com/api/character/random');
    const res = await res1.json();
    setNameOne(res[0].name);
    setImageOne(res[0].img);
    const res2 = await fetch('https://breakingbadapi.com/api/character/random');
    const data1 = await res2.json();
    setNameTwo(data1[0].name);
    setImageTwo(data1[0].img);
    const res3 = await fetch('https://breakingbadapi.com/api/character/random');
    const data2 = await res3.json();
    setNameThree(data2[0].name);
    setImageThree(data2[0].img);
  };

  useEffect(() => {
    fetchQuote();
  }, [refetch, newQuote]);

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

  const handleAnswerOptionClick = (answer) => {
    console.log(answer);
    if (answer === randomAuthor) {
      alert("Right!");
      setCount(0);
      // set timeout 3 seconds
      setTimeout(() => {
        setNewQuote(!newQuote);
      }, 3000);
    } else {
        alert("Wrong...");
        setCount(count + 1);
        // set timeout 3 seconds
        setTimeout(() => {
          setNewQuote(!newQuote);
        }, 3000);
        for (let i = 0; i < 4; i++) {
            if (setCount === 3) {
                alert("Game Over!!");
                // set timeout 3 seconds
                setTimeout(() => {
                return (
                    <>
                    <GameStart />
                    </>
                );
              }, 3000);
             } catch {
              setTimeout(() => {
                setNewQuote(!newQuote);
              }, 3000);
             }
    } 

    // const GameOver = ({ handleAnswerOptionClick }) => {
    //     console.log(answer);
    //     if (answer === randomAuthor) {
    //       setNewQuote(!newQuote);
    //       alert("Right!");
    //     } else {
    //         let current = 0;
    //         for (let i = 0; i<4; i++) {
    //         count === 3 ? return  : current++;
    //         setCount(count + 1);
    //         alert("Wrong...");
    //     } 
    //   };
  // };


  // console.log(name);
  return (
    <div>
      <h1>Test Your Knowledge</h1>
      <h3>Question 1</h3>
      <h5>Who said...</h5>
      <div className="game-status-bar">
        <blockquote className="quote-box">"{quote}"</blockquote>
        <div className="score-box">
          <h5>Score</h5>
          <span>5</span>
        </div>
      </div>

      <div className="game-options-container">
        <div className="options-row options-one">
          <button
            type="submit"
            className="game-option option-one"
            // onClick={() => handleAnswerOptionClick(answer[0][0])}
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
            value={answer[1][0]}
            // onClick={() => handleAnswerOptionClick(answer[1][0])}
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
            value={answer[2][0]}
            // onClick={() => handleAnswerOptionClick(answer[2][0])}
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
            value={answer[3][0]}
            // onClick={() => handleAnswerOptionClick(answer[3][0])}
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


export default GameChoices;
// 1. Take the value of the button that was clicked.
// 2.

// const [currentQuestion, setCurrentQuestion] = useState(0);
// const [showScore, setShowScore] = useState(false);
// const [score, setScore] = useState(0);

// const handleAnswerOptionClick = (answer[0].[0] => {
//   if (answer[0].[0] = randomAuthor) {
//     setScore(score + 1);
//   }

//   const nextQuestion = currentQuestion + 1;
//   if (nextQuestion < randomAuthor.length) {
//     setCurrentQuestion(nextQuestion);
//   } else {
//     setShowScore(true);
//   }
// }

// function sayHello() {
//   alert('You clicked me!');
// }
// // Usage
// <button onClick={sayHello}>Default</button>;

// function rightOrWrong() {
//   alert('You clicked me!');
//   }

//   function rightOrWrong() {
//     return 'You clicked me!';
//     }

//     var rightOrWrong() {
//       return 'You clicked me!';
//       }

//   }
//   const handleClick = () => {
//     if (value === randomAuthor) {
//       console.log();
//     }
// }

// const handleClick = (value) => {
//   if (value === randomAuthor) {
//     console.log("is a match");
//   } else {
//     console.log("not a match");
//   }
// }

// const [currentQuestion, setCurrentQuestion] = useState(0);
// const [showScore, setShowScore] = useState(false);
// const [score, setScore] = useState(0);

// const handleAnswerOptionClick = (isCorrect) => {
//   if (isCorrect) {
//     setScore(score + 1);
//   }

//   const nextQuestion = currentQuestion + 1;
//   if (nextQuestion < questions.length) {
//     setCurrentQuestion(nextQuestion);
//   } else {
//     setShowScore(true);
//   }
// };