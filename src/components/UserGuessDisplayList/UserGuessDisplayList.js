import React from 'react';

function UserGuessDisplayList( {guesses} ) {
  return <>
  users guesses:
  <div className="guess-results">
    {guesses.map((guess, index)=>
      <p
        className="guess"
        key={index}
      >{guess}
      </p>
    )}
  </div>
</>;
}

export default UserGuessDisplayList;
