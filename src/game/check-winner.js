import { isMoveAvailable } from "./move-prediction";

const MAT_SIZE = 5;

export const checkWinner = (mat, player) => {
  let winner = -1;
  let p1available = 0,
    p2available = 0;
  let p1pieces = 0,
    p2pieces = 0;

  for (let i = 0; i < MAT_SIZE; i++) {
    for (let j = 0; j < MAT_SIZE; j++) {
      if (mat[i][j] === 1) {
        p1pieces++;
        const p1moves = isMoveAvailable(1, [i, j], mat);
        p1available += p1moves && (p1moves.length > 0 ? p1moves.length : 0);
      } else if (mat[i][j] === 2) {
        p2pieces++;
        const p2moves = isMoveAvailable(2, [i, j], mat);
        p2available += p2moves && (p2moves.length > 0 ? p2moves.length : 0);
      }
    }
  }

  if (p1pieces === 0) {
    winner = 2;
  } else if (p2pieces === 0) {
    winner = 1;
  } else if (player === 1 && p1available === 0) {
    winner = 2;
  } else if (player === 2 && p2available === 0) {
    winner = 1;
  } else {
    winner = -1;
  }

  if (p1pieces === 0 && p2pieces === 0) {
    winner = 3;
  }
  if (p1available === 0 && p2available === 0) {
    winner = 3;
  }

  return winner;
};