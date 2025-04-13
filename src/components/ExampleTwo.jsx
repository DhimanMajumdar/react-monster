import React, { useState } from 'react'

const ExampleTwo = () => {
    const [randomNumber,setRandomNumber] = useState(()=>Math.floor(Math.random()*100))
    const handleClick=()=>{
        const newNumber=Math.floor(Math.random()*100)
        setRandomNumber(newNumber);
    }
  return (
    <div>
        <h1>Random Number: {randomNumber}</h1>
        <button onClick={handleClick}>Generate new random number</button>
    </div>
  )
}

export default ExampleTwo