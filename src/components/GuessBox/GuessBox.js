import React from 'react';

function GuessBox({ guess, setGuess, testGuess, gameStatus }) {

  return <div>
    <form className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();
        testGuess();
        setGuess('')
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        // maxLength={5}
        value={guess}
        disabled={gameStatus !== 'running'}
        onChange={(event) => { setGuess((event.target.value).toUpperCase()) }}
        pattern="[a-zA-Z]{5}" required title="5 letter word"
      />
      {/* <button type="submit">Enter</button> */}

    </form>
  </div>;
}

export default GuessBox;
