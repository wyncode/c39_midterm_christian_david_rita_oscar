import React, { useState, useEffect } from "react";

function CharacterFile(){

    const [apiData,setApiData] = useState({})

    useEffect(()=>{
        function getAPIURL(){
            fetch('https://breakingbadapi.com/api/quote/random')
            .then(response => response.json())
            .then((data) => {
                setApiData(data[0].quote)}
            )};
        getAPIURL()
    },[]);

    return (
        <div className="filecontainer">
            <div>
                <h1>Walter White</h1>
            </div>
            <div className='filecard'>
                <div className='cardImage'>
                    <p className='placeholderforimage'></p>
                </div>
                <div className='carddata'>
                    <div className='leftfilecard'>
                        <div id='characterdata'>
                            <p id='name'>Portrayed By: Bryan Cranston</p>
                            <p id='age'>Age:47</p>
                            <p id='deaths'>Deaths Responsible for: 20</p>
                        </div>
                    </div>
                    <div className='rightfilecard'>
                        <h1>About</h1>
                        <p>Walter white was born on a warm summer day. He also cooks meth.</p>
                    </div>
                </div>
            </div>
         <div className="quotecontainer">
                <div className='quotebox'>
                    <h1>Quote</h1>
                    <p>jjjjjj</p>
                </div>
                <div>
                    <button className='quotebutton'>New Quote</button>
                </div>
            </div>   
        </div>
    )
    }
export default CharacterFile