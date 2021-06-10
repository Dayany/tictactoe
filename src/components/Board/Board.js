import react, { useState } from "react";
import Space from "../Spaces/Space";

function Board() {
  const [spaces, setSpaces] = useState(new Array(9).fill(null));
  const [switchPlayer, setSwitchPlayer] = useState(false);

  const nextPlayer = () => {
    if (switchPlayer) return "X";
    return "O";
  };
  const switchNextPlayer = () => {
    setSwitchPlayer(!switchPlayer);
  };

  const setSpaceValue = (indexSpace) => {
    if (!spaces[indexSpace]) {
      let newSpaces = [...spaces];
      newSpaces[indexSpace] = nextPlayer();
      setSpaces([...newSpaces]);
      switchNextPlayer();
    }
  };
  console.log(spaces);
  setSpaceValue(1);
  setSpaceValue(3);
  setSpaceValue(5);
  console.log(spaces);
  return (
    <>
      <h1>Board</h1>
      <b>Next Player: {nextPlayer()}</b>
      <div className="board">
        <div className="row1">
          <Space value={spaces[0]} />
          <Space value={spaces[1]} />
          <Space value={spaces[2]} />
        </div>
        <div className="row2">
          <Space value={spaces[3]} />
          <Space value={spaces[4]} />
          <Space value={spaces[5]} />
        </div>
        <div className="row3">
          <Space value={spaces[6]} />
          <Space value={spaces[7]} />
          <Space value={spaces[8]} />
        </div>
      </div>
    </>
  );
}

export default Board;
