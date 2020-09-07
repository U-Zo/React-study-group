import React, { useState } from 'react';
import './App.css';

function Square(props) {
  const [value, setValue] = useState(null);

  return (
    //
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board() {
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  function calculateWinner(squares) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]; // 'O' or 'X'
      }
    }

    return null;
  }

  function handleClick(i) {
    const _squares = state.squares.slice();
    if (calculateWinner(_squares) || _squares[i]) {
      return;
    }

    _squares[i] = state.xIsNext ? 'X' : 'O';
    setState({
      squares: _squares,
      xIsNext: !state.xIsNext,
    });
  }

  const renderSquare = (i) => {
    return <Square value={state.squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(state.squares); // X or O or null

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div></div>
        <ol></ol>
      </div>
    </div>
  );
}

export default App;
