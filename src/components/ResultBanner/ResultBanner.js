import React from 'react';

function ResultBanner({ numberOfGuess, gameStatus, answer }) {
  [modalStatus, setModalStatus] = React.useState('hidden')

  function handleRefresh() {
    window.location.reload();
  }

  function hideBanner() {
    setModalStatus('dismissed')
  }

  console.log({ gameStatus })
  return (
    <>
      {gameStatus === "won" ? (
        <div className={`happy banner ${modalStatus !== 'dismissed' ? null : 'visually-hidden'}`}>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{numberOfGuess} guesses</strong>.
          </p>
          <button onClick={handleRefresh}>Play again?</button>
          <button className="modal-close-btn" onClick={hideBanner}>Close X</button>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={handleRefresh}>Play again?</button>
          <button className="modal-close-btn" onClick={hideBanner}>Close X</button>
        </div>
      )}
    </>
  );
}

export default ResultBanner;
