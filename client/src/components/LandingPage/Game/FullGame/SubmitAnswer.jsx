import React from 'react'

const submitAnswer = ({ handleClick }) => {
    return (
        <button onClick={handleClick} >
        <div>
            alert("Hello");
        </div>
    )
}

export default SubmitAnswer;