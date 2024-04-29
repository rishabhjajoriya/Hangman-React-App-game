import { useCallback, useState } from "react";
import { useEffect } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import Keyboard from "./Keyboard";
import HangmanWord from "./HangmanWord";

function App() {
  const [wordToGuess, setwordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
 
const [guessedLetter, setguessedLetter] = useState<string[]>([]);
console.log('wordToGuess',wordToGuess,'guessedLetter',guessedLetter);

const incorrectLetters = guessedLetter.filter((letter) => {
  return !wordToGuess.includes(letter);
});

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetter.includes(letter)) return;
      setguessedLetter((currentLetter) => [...currentLetter, letter]);
    },
    [guessedLetter]
  );

  

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetter.includes(letter));

  useEffect(() => {       
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetter]);

  console.log(wordToGuess);
  return (
    <>
      <div
        style={{
          height: "500px",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <>
          <h1>hi</h1>
        </>

        <div
          style={{
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          {isWinner && "Winner- Refresh to try again"}
          {isLoser && "You are loser. Refresh again and lose"}
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord guessedLetter={guessedLetter} wordToGuess={wordToGuess} />
        
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
            activeLetter={guessedLetter.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </>
  );
}

export default App;
