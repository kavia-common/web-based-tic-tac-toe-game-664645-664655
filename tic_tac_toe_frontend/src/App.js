import React from 'react';
import './App.css';
import Game from './components/Game';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      <h1 className="title">Tic Tac Toe</h1>
      <Game />
    </div>
  );
}

export default App;
