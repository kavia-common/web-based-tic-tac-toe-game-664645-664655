import React from 'react';

// PUBLIC_INTERFACE
const Square = ({ value, onClick }) => (
  <button 
    className={`square ${value?.toLowerCase()}`} 
    onClick={onClick}
    aria-label={value ? `Square with ${value}` : 'Empty square'}
  >
    {value}
  </button>
);

// PUBLIC_INTERFACE
const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
};

export default Board;
