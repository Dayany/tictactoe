import { useState } from "react";
import Space from "../Spaces/Space";

function Board() {
  const [spaces, setSpaces] = useState(new Array(9).fill(""));
  const [gameStarted, setGameStarted] = useState(false);
  const [switchPlayer, setSwitchPlayer] = useState(false);

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
    if (!gameStarted) {
      setGameStarted(true);
    }
    if (!spaces[indexSpace]) {
      let newSpaces = [...spaces];
      newSpaces[indexSpace] = nextPlayer();
      setSpaces(newSpaces);
      switchNextPlayer();
    }
  };

  return (
    <>
      <h1>Board</h1>
      <b>Next Player: {nextPlayer()}</b>
      {!gameStarted ? (
        <>
          <br />
          <button onClick={startAsNextPlayer}>Switch Player?</button>
        </>
      ) : null}
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
