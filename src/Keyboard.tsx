import React from 'react'
import styles from './keyboard.module.css'
const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

 type keyboardProps = {
    activeLetter: string[],
    inactiveLetters : string[],
    addGuessedLetter:(letter:string) => void
 }

const Keyboard = ({activeLetter,inactiveLetters,addGuessedLetter} : keyboardProps) => {
  return (
    <div style = {{display:'grid', gridTemplateColumns:"repeat(auto-fit,minmax(75px,4fr))", gap:".5rem"}} >
      {KEYS.map(key => {
        const isActive = activeLetter.includes(key)
        const isinActive = inactiveLetters.includes(key)
        return <button onClick={() => addGuessedLetter(key)} className={`${styles.btn} 
        ${isActive ? styles.active : ""} ${isinActive ? styles.inactive : ""}` } key = {key} >{key} </button>
      })}
    </div>
  )
}

export default Keyboard
