import { createContext, useState } from "react";

const PlayerMoveContext = createContext({
  moves: [],
  addMove: (moveData) => {},
});

export function PlayerMoveContextProvider(props) {
  const [moves, setMoves] = useState([]);

  const addMoveHandler = (moveData) => {
    setMoves([...moves, moveData]);
  };

  const context = {
    moves,
    addMove: addMoveHandler,
  };

  return (
    <PlayerMoveContext.Provider value={context}>
      {props.children}
    </PlayerMoveContext.Provider>
  );
}

export default PlayerMoveContext;
