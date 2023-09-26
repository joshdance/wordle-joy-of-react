import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessBox from '../GuessBox/GuessBox';
import UserGuessDisplayList from '../UserGuessDisplayList/UserGuessDisplayList';
import GuessDisplay from '../GuessDisplay/GuessDisplay';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import ResultBanner from '../ResultBanner/ResultBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


const numberOfGuesses = NUM_OF_GUESSES_ALLOWED
const numberOfLetters = 5;
const guessesArray = Array.from({ length: numberOfGuesses }, () => "")
let userTurn = 0;

function Game() {
  const [guess, setGuess] = React.useState('')
  const [guesses, setGuesses] = React.useState(guessesArray)
  const [gameStatus, setGameStatus] = React.useState('running')
  console.log(guesses)

  function testGuess() {
    const newGuessArray = [...guesses]
    const guessResult = checkGuess(guess, answer)
    newGuessArray[userTurn] = guessResult;
    userTurn = userTurn + 1;
    setGuesses(newGuessArray)
    console.log({ newGuessArray })
    if (answer == guess) {
      console.log('You guessed it correct! ✋🏻')
      setGameStatus('won')
    } else {
      console.log('Keep guessing!')
    }
console.log({userTurn})
    if (userTurn >= 6) {
      console.log('You lost. Play again?')
      setGameStatus('lost')
    }
  }

  return <>
    <div>
      Guess a 5 letter word.
    </div>
    <GuessDisplay
      guesses={guesses}
    />
    {userTurn == 5 ? <p>One guess left!</p> : null}
    <GuessBox
      guess={guess}
      setGuess={setGuess}
      testGuess={testGuess}
      gameStatus={gameStatus}
    />
    {gameStatus != 'running' ? (
      <ResultBanner
        numberOfGuess={userTurn}
        gameStatus={gameStatus}
        answer={answer}
      />) : null}
  </>;
}

export default Game;
