import { useState } from "react";
import Space from "../Spaces/Space";

function Board() {
  const [spaces, setSpaces] = useState(new Array(9).fill(""));
  const [gameStarted, setGameStarted] = useState(false);
  const [switchPlayer, setSwitchPlayer] = useState(false);
  const [winner, setWinner] = useState("");
  const nextPlayer = () => {
    if (switchPlayer) return "X";
    return "O";
  };
  const switchNextPlayer = () => {
    setSwitchPlayer(!switchPlayer);
  };
  const startAsNextPlayer = () => {
    if (!gameStarted) {
      switchNextPlayer();
    }
  };
  const setSpaceValue = (indexSpace) => {
    if (!winner) {
      if (!gameStarted) {
        setGameStarted(true);
      }
      if (!spaces[indexSpace]) {
        let newSpaces = [...spaces];
        newSpaces[indexSpace] = nextPlayer();
        setSpaces(newSpaces);
        hasGameEnded(newSpaces);
        switchNextPlayer();
      }
    }
  };

  const hasGameEnded = (board) => {
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    possibleWins.map((current) => {
      if (
        board[current[0]] &&
        board[current[0]] === board[current[1]] &&
        board[current[1]] === board[current[2]]
      ) {
        setWinner(board[current[0]]);
        return;
      }
    });

    let isElementEmpty = false;
    board.map((current) => {
      if (!current) {
        isElementEmpty = true;
        return;
      }
    });
    if (!isElementEmpty) {
      setWinner("None");
    }
  };
  return (
    <>
      <h1>Board</h1>
      {!gameStarted ? (
        <>
          <button onClick={startAsNextPlayer}>Switch Player?</button>
          <br />
        </>
      ) : null}
      {winner ? (
        <>
          <h1>The game has ended!</h1>
          <b>Winner: {winner}</b>
        </>
      ) : (
        <b>Next Player: {nextPlayer()}</b>
      )}
      <div className="board">
        <div className="row1">
          <Space value={spaces[0]} markSquare={() => setSpaceValue(0)} />
          <Space value={spaces[1]} markSquare={() => setSpaceValue(1)} />
          <Space value={spaces[2]} markSquare={() => setSpaceValue(2)} />
        </div>
        <div className="row2">
          <Space value={spaces[3]} markSquare={() => setSpaceValue(3)} />
          <Space value={spaces[4]} markSquare={() => setSpaceValue(4)} />
          <Space value={spaces[5]} markSquare={() => setSpaceValue(5)} />
        </div>
        <div className="row3">
          <Space value={spaces[6]} markSquare={() => setSpaceValue(6)} />
          <Space value={spaces[7]} markSquare={() => setSpaceValue(7)} />
          <Space value={spaces[8]} markSquare={() => setSpaceValue(8)} />
        </div>
      </div>
    </>
  );
}

export default Board;
