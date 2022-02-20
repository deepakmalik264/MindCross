import { useState, useEffect, useContext } from "react";
import PlayerMoveContext from "../../store/player-move-context";
import { matrixUpdate } from "../../game/matrix-update";
import styles from "./BoardPieces.module.css";
import { isMoveValid } from "../../game/move-validation";
import { isMoveAvailable } from "../../game/move-prediction";
import { checkWinner } from "../../game/check-winner";

const playerPieceClassname = (player) => {
  if (player === 1) {
    return styles.player1;
  } else if (player === 2) {
    return styles.player2;
  }
};

const sourceClassname = (surc, i, j) => {
  if (surc[0] === i && surc[1] === j) {
    return `${styles.piece_container} ${styles.source}`;
  }
  return `${styles.piece_container}`;
};

const BoardPieces = () => {
  const { addMove, setGameWinner } = useContext(PlayerMoveContext);
  const [surc, setSurc] = useState([-1, -1]);
  const [dest, setDest] = useState([-1, -1]);
  const [moves, setMoves] = useState([]);
  const [step, setStep] = useState(1);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [pieces, setPieces] = useState([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
  ]);

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

  useEffect(() => {
    const winner = checkWinner(pieces, playerTurn);
    if (winner !== -1) {
      console.log("winner", winner);
      setGameWinner(winner);
    }
  }, [pieces, playerTurn, setGameWinner]);

  const possibleDestClassname = (i, j) => {
    const isPossibleDest = moves.find((move) => move[0] === i && move[1] === j);

    if (isPossibleDest && isPossibleDest.length > 0) {
      return `${styles.possible_dest}`;
    }

    return "";
  };

  const handleMove = (player, coords) => {
    if (step === 1) {
      if (player === playerTurn) {
        setSurc(coords);
        setStep(2);
        setMoves(isMoveAvailable(player, coords, pieces));
      }
    } else if (step === 2 && pieces[coords[0]][coords[1]] === playerTurn) {
      setSurc(coords);
      setMoves(isMoveAvailable(player, coords, pieces));
    } else if (step === 2 && isMoveValid(playerTurn, surc, coords, pieces)) {
      setDest(coords);
      setStep(3);
      setMoves([]);
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
                    className={`${sourceClassname(
                      surc,
                      i,
                      j
                    )} ${possibleDestClassname(i, j)}`}
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
                    