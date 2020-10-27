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

// rightOrWrong = () => {
//   for(answer[0].[0] || answer[0].[1] === randomAuthor){
//       return correct = () => {
//         // async?
//         counter = () => {
//           (let i=0; i<2; i++)
//           i++;} &&
//         //await?
//         secondQuestion = () => {

//         }
//         //counter ++

//       }
//   };
// };

  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.    
	</div>
  );
}


async awaitJavascript By MM.Mirzaei.Dev on Aug 6 2020
async function showAvatar() {
	// read
  	await setTimeout(resolve, 3000);
    // read next 3s
}

    //if counter = 2
    // send to start page again

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
          
            let answer;
        
            answer= [[name, image], [nameOne, imageOne], [nameTwo, imageTwo], [nameThree, imageThree]];
            console.log(answer);
            answer.sort(function() { return 0.5 - Math.random() });
            console.log(answer);
            console.log(answer[0]);
            console.log(answer[1]);
            console.log(answer[2]);
            console.log(answer[3]);

            console.log("hello");
       

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
        <button type="submit" className="game-option option-one" onclick={rightOrWrong()}>
          <h3>{answer[0].[0]}</h3>
          <img src={answer[0].[1]} alt="random character from Breaking Bad for user to select from"/>
        </button>
        <button type="submit" className="game-option option-two" onclick={rightOrWrong()}>
          <h3>{answer[1].[0]}</h3>
          <img src={answer[1].[1]} alt="random character from Breaking Bad for user to select from"/>
        </button>
      </div>
      <div className="options-row options-three">
        <button type="submit" className="game-option option-one" onclick={rightOrWrong()}>
          <h3>{answer[2].[0]}</h3>
          <img src={answer[2].[1]} alt="random character from Breaking Bad for user to select from"/>
        </button>
        <button type="submit" className="game-option option-four" onclick={rightOrWrong()}>
          <h3>{answer[3].[0]}</h3>
          <img src={answer[3].[1]} alt="random character from Breaking Bad for user to select from"/>
        </button>
      </div>
    </div>
    </div>
  );

}


export default GameChoices;


