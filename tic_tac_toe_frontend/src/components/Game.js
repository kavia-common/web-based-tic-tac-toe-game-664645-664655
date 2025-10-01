import React, { useState } from 'react';
import Board from './Board';

// Helper function to calculate winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// PUBLIC_INTERFACE
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current);
  const isDraw = !winner && current.every(square => square !== null);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const currentSquares = newHistory[newHistory.length - 1].slice();
    
    if (calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }
    
    currentSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...newHistory, currentSquares]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  };

  let status;
  if (winner) {
    status = <div className="winner-message">Winner: {winner}</div>;
  } else if (isDraw) {
    status = <div className="status">Game Draw!</div>;
  } else {
    status = <div className="status">Next player: {xIsNext ? 'X' : 'O'}</div>;
  }

  return (
    <div className="game">
      {status}
      <Board squares={current} onClick={handleClick} />
      <div className="controls">
        <button className="button button-primary" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default Game;
