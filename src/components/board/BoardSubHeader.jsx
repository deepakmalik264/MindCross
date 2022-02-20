import { useContext } from "react";
import PlayerMoveContext from "../../store/player-move-context";

const BoardSubheader = () => {
  const { winner } = useContext(PlayerMoveContext);

  if (winner === 1 || winner === 2) {
    const winPlayer = winner === 1 ? "red" : "blue";

    return <h3>Player {`${winPlayer}`} won!!!</h3>;
  }

  if (winner === 3) {
    return <h3>Draw!!!</h3>;
  }

  return <h3>Let's Play!</h3>;
};

export default BoardSubheader;