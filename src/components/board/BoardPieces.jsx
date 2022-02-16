import { useState, useEffect, useContext } from "react";
import PlayerMoveContext from "../../store/player-move-context";
import { matrixUpdate } from "../../game/matrix-update";
import styles from "./BoardPieces.module.css";
import { isMoveValid } from "../../game/move-validation";

const BoardPieces = () => {
  const { addMove } = useContext(PlayerMoveContext);
  const [surc, setSurc] = useState([-1, -1]);
  const [dest, setDest] = useState([-1, -1]);
  const [step, setStep] = useState(1);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [pieces, setPieces] = useState([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
  ]);

  const playerPieceClassname = (player) => {
    if (player === 1) {
      return styles.player1;
    } else if (player === 2) {
      return styles.player2;
    }
  };

  useEffect(() => {
    if (step === 3) {
      setPieces((prevState) => matrixUpdate(prevState, playerTurn, surc, dest));
      addMove({ player: playerTurn, surc, dest });
      setStep(1);
      setSurc([-1, -1]);
      setDest([-1, -1]);
      setPlayerTurn((prevState) => (prevState === 1 ? 2 : 1));
    }
  }, [addMove, dest, playerTurn, step, surc]);

  const handleMove = (player, coords) => {
    if (step === 1) {
      if (player === playerTurn) {
        setSurc(coords);
        setStep(2);
      }
    } else if (step === 2 && pieces[coords[0]][coords[1]] === playerTurn) {
      setSurc(coords);
    } else if (step === 2 && isMoveValid(playerTurn, surc, coords, pieces)) {
      setDest(coords);
      setStep(3);
    }
  };

  return (
    <div className={styles.main}>
      {pieces.map((row, i) => {
        return (
          <div className={styles.row} key={i}>
            {row.map((piece, j) => {
              return (
                <div className={styles.piece} key={j}>
                  <div
                    className={styles.piece_container}
                    onClick={() => handleMove(piece, [i, j])}
                  >
                    {piece !== 0 ? (
                      <span className={playerPieceClassname(piece)}>
                        {piece}
                      </span>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default BoardPieces;