import { isMoveValid } from "./move-validation";

const player1dests = (surc) => {
  const dest = [
    [surc[0] + 1, surc[1]],
    [surc[0] + 2, surc[1]],
    [surc[0] + 1, surc[1] + 1],
    [surc[0] + 1, surc[1] - 1],
    [surc[0] + 2, surc[1] + 2],
    [surc[0] + 2, surc[1] - 2],
  ];

  return dest;
};

export const isMoveAvailableP1 = (surc, mat) => {
  const dest = player1dests(surc);
  const isMoveAvailable = dest.filter((dest) =>
    isMoveValid(1, surc, dest, mat)
  );

  return isMoveAvailable;
};

const Player2dests = (surc) => {
  const dest = [
    [surc[0] - 1, surc[1]],
    [surc[0] - 2, surc[1]],
    [surc[0] - 1, surc[1] + 1],
    [surc[0] - 1, surc[1] - 1],
    [surc[0] - 2, surc[1] + 2],
    [surc[0] - 2, surc[1] - 2],
  ];

  return dest;
};

export const isMoveAvailableP2 = (surc, mat) => {
  const dest = Player2dests(surc);
  const isMoveAvailable = dest.filter((dest) =>
    isMoveValid(2, surc, dest, mat)
  );

  return isMoveAvailable;
};

export const isMoveAvailable = (player, surc, mat) => {
  if (player === 1) {
    return isMoveAvailableP1(surc, mat);
  } else {
    return isMoveAvailableP2(surc, mat);
  }
};