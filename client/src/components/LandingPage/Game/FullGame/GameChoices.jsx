/*jshint esversion: 6 */

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
const [newQuote, setNewQuote] = useState(false);
const [refetch, setRefetch] = useState(false);
const [count, setCount] = useState(0);
const [click, setClick] = useState(0)

  let randomQuote;
  let randomAuthor;
  let author;

    useEffect(() =>
    {        fetch("https://breakingbadapi.com/api/quote/random")
            .then((response) => response.json())
            .then((data) => {
                randomQuote = data[0].quote;
                randomAuthor = data[0].author;
                let stringArray = randomAuthor.split(" ");
                author = stringArray[0]+"+"+stringArray[1];
                // console.log(author);
                // console.log(data[0].quote);
                setQuote(data[0].quote);
                fetch(`https://breakingbadapi.com/api/characters?name=${author}`)
                .then((response) => response.json())
                .then((data) => {
                  // console.log(data[0].img);
                  setImage(data[0].img);
                  setName(data[0].name);
                  let name = data[0].name;
                  // console.log(randomAuthor+"JJJJJJ");
                  // console.log(name);
                });
              
            })
            .then(fetch(`https://breakingbadapi.com/api/character/random`)
            .then((random) => random.json())
            .then((randomdata) => {
              // console.log(randomdata[0].name);
              // console.log(randomdata[0].img);
              setNameOne(randomdata[0].name);
              setImageOne(randomdata[0].img);
            }))

            .then(fetch(`https://breakingbadapi.com/api/character/random`)
            .then((randomone) => randomone.json())
            .then((randomdataone) => {
              setNameTwo(randomdataone[0].name);
              setImageTwo(randomdataone[0].img);
            }))

            .then(fetch(`https://breakingbadapi.com/api/character/random`)
            .then((randomtwo) => randomtwo.json())
            .then((randomdatatwo) => {
              // console.log(randomdatatwo[0].name);
              // console.log(randomdatatwo[0].img);
              setNameThree(randomdatatwo[0].name);
              setImageThree(randomdatatwo[0].img);
            }));

        },[click]);
          
            let answer;
        
            answer= [[name, image], [nameOne, imageOne], [nameTwo, imageTwo], [nameThree, imageThree]];
            // console.log(answer);
            answer.sort(function() { return 0.5 - Math.random(); });
            // console.log(answer);
            // console.log(answer[0]);
            // console.log(answer[1]);
            // console.log(answer[2]);
            // console.log(answer[3]);

      // const handleAnswerOptionClick = (answer) => {
      //   console.log(answer)
      //   if (answer === randomAuthor){
          
      //     setNewQuote(!newQuote)
      //   }
        
      // }

      const handleAnswerOptionClick 
      = (event) => 
      {
        event.preventDefault();
        console.log(event.currentTarget.innerText);
        if (event.currentTarget.innerText === name) {
          alert("Right!");
          setCount(0);
          setClick(click + 1)
          setTimeout(() => {
          setNewQuote(!newQuote);
          }, 3000);}
          else {          
            setCount(count + 1);
            setClick(click + 1)
            if (count === 3) {
              alert("game over!")
              setCount(0)
            }

            setTimeout(() => {
              setNewQuote(!newQuote);
            }, 3000);
            
          }  
        };

        //  else if {
        // for (let i = 0; i < 4; i++) {
        //     if (setCount === 3) {
        //       alert("Game Over!!");
        //       setTimeout(() => {
        //       return (
        //           <>
        //           <GameStart />
        //           </>
        //       );}, 3000);} 
        //     }
        //   } else {
        //     alert("Wrong...");
 
        //     catch {
        //           setTimeout(() => {
        //             setNewQuote(!newQuote);
        //           }, 3000);
        //          }
        // } 

  return (
    <div>
      <h1>Test Your Knowledge</h1>
      <h3>Question</h3>
      <h5>Who said...</h5>
      <div className="game-status-bar">
        <blockquote className="quote-box">"{quote}"</blockquote>
        <div className="score-box">
          <h5>Score:</h5>
          <span> {count}  </span>
        </div>
      </div>

    <div className="game-options-container">
      <div className="options-row options-one">
        <button className="game-option option-one" onClick={ handleAnswerOptionClick }
        >
          <h3>{answer[0][0]}</h3>
          <img src={answer[0][1]} alt="random character from Breaking Bad for user to select from" />
          </button>
          <button type="submit" className="game-option option-two" onClick={ handleAnswerOptionClick }
        >
          <h3>{answer[1][0]}</h3>
          <img src={answer[1][1]} alt="random character from Breaking Bad for user to select from" />
        </button>
      </div>
      <div className="options-row options-three">
        <button type="submit" className="game-option option-one" onClick={ handleAnswerOptionClick }
        >
          <h3>{answer[2].[0]}</h3>
          <img src={answer[2][1]} alt="random character from Breaking Bad for user to select from" />
        </button>
        <button type="submit" className="game-option option-four" onClick={ handleAnswerOptionClick }
        >
          <h3>{answer[3][0]}</h3>
          <img src={answer[3][1]} alt="random character from Breaking Bad for user to select from" />
        </button>
      </div>
    </div>
    </div>
  );
  };

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
        // ________________________________

        // rightOrWrong = () => {
//   for(answer === randomAuthor){
//       return correct = () => {
//         // async?
//         counter = () => {
//           (let i=0; i<2; i++)
//           i++;} &&
//         //await?
//         secondQuestion = () => {

            // setQuote()
//         }
//         //counter ++
  
        // Now I've forgotten what I was doing

//     //if counter = 2
  // send to start page again
    // }
//   };
// };

// grepper
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.    
// 	</div>
//   );
// }



// async function Do() {
	// read
  	// await setTimeout(resolve, 3000);
    // reads next 3s
  // }
