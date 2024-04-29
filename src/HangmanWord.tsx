import React from 'react'

type HangmanWordProps ={
    guessedLetter: string[]
    wordToGuess:string
}

const HangmanWord = ({guessedLetter,wordToGuess} : HangmanWordProps) => {
    
  return (
    <div style={{
        display:"flex",
        fontFamily:"monospace",
        fontWeight:"bolder",
        fontSize:"6rem",
        gap:"0.25rem",
        textTransform : "uppercase"
    }} >
        
        {wordToGuess.split("").map((letter,index) => (
            <span style={{gap:"2px",borderBottom:".1em solid black"}} key={index}>
                <span style={{visibility : guessedLetter.includes(letter) ? 'visible':'hidden' }}>
                    {letter}
                </span>
            </span>
        ))}
   </div>
  )
}

export default HangmanWord
