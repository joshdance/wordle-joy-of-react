import React from 'react';

let guessResult = [
  { letter: 'W', status: 'incorrect' },
  { letter: 'H', status: 'incorrect' },
  { letter: 'A', status: 'correct' },
  { letter: 'L', status: 'misplaced' },
  { letter: 'E', status: 'misplaced' },
]

function GuessDisplay({ guesses }) {

  function stringToArray(string) {
    if (string === "") {
      return ["", "", "", "", ""];
    }
    return string.split("");
  }

  function processGuess(guess, index) {
    if (guess == '') {
      const blankArray = ["", "", "", "", ""]
      return (
        <p key={index} className="guess">
          {blankArray.map((blank, index) => (
            <span key={index}
              className="cell">{blank}</span>
          ))}
        </p>
      )
    } else {
      return (
        <p key={index} className="guess">
          {console.log({ guess })}
          {guess.map((letter, index) => (
            <span key={index}
              className={`cell ${letter.status}`}>{letter.letter}</span>
          ))}
        </p>
      )
    }

  }

  return <>
    <div className="guess-results">
      {guesses.map((guessNumber, index) => (
        processGuess(guessNumber, index)
      ))}
    </div>
  </>;
}

export default GuessDisplay;
