import { createContext, useState } from "react";

const PlayerMoveContext = createContext({
  moves: [],
  addMove: (moveData) => {},
  winner: -1,
  setGameWinner: (winner) => {},
});

export function PlayerMoveContextProvider(props) {
  const [moves, setMoves] = useState([]);
  const [winner, setWinner] = useState(-1);

  const addMoveHandler = (moveData) => {
    setMoves([...moves, moveData]);
  };

  const setGameWinner = (winner) => {
    setWinner(winner);
  };

  const context = {
    moves,
    addMove: addMoveHandler,
    winner,
    setGameWinner,
  };

  return (
    <PlayerMoveContext.Provider value={context}>
      {props.children}
    </PlayerMoveContext.Provider>
  );
}

export default PlayerMoveContext;