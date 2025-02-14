/*usamos useState para os componentem "lembrarem" do estado que devem armazenar*/
import { useState } from "react";

// value stores the value and setValue is a function that can be used to change the value.
// The null passed to useState is used as the initial value for this state variable, so value
// here starts off equal to null.
// const [value, setValue] = useState(null);

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  // const history = [];

  const winner = calculateWinner(squares);
  let status = "";
  let notEndedYet = true;
  let draw = handleDraw(squares) && !winner;

  if (winner != null) {
    status = winner;
    notEndedYet = false;
  } else if (draw) {
    notEndedYet = false;
    //console.log("Next Player: " + xIsNext ? "X" : "O");
  }

  // function handleClick(i) {
  //   if (squares[i] != null || calculateWinner(squares)) return;

  //   const nextSquares = squares.slice();
  //   //nextSquares[i] = "X";

  //   nextSquares[i] = xIsNext ? "X" : "O";
  //   history.push(nextSquares);
  //   setXIsNext(!xIsNext);
  //   setSquares(nextSquares);

  //   // const winner = calculateWinner(squares);
  //   // if (winner) console.log("{winner} ganhou !!!");
  // }

  return (
    <>
      {status && <h1>The winner is {status} !!!</h1>}
      {draw && <h1>O jogo terminou em empate.</h1>}
      {notEndedYet && <h2>Next player: {xIsNext ? "X" : "O"}</h2>}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currMove, setCurrMove] = useState(0);
  const xIsNext = currMove % 2 === 0;
  const currSquares = history[currMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrMove(nextHistory.length - 1);
    // history.push(nextSquares);
    // currSquares = history[history.length - 1];
  }

  function jumpTo(nextMove) {
    setCurrMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    const description = move > 0 ? "Go to move #" + move : "Go to game start";

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currSquares} onPlay={handlePlay} />
      </div>

      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
function handleDraw(squares) {
  //se houve ganhador ou se existem casas vazias, ainda nao aconteceu empate
  //if (calculateWinner(squares)) return false;

  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) return false;
  }
  return true;
}

function calculateWinner(squares) {
  const waysToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (let i = 0; i < waysToWin.length; i++) {
    const [a, b, c] = waysToWin[i];
    if (
      squares[a] != null &&
      squares[a] == squares[b] &&
      squares[a] == squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}
