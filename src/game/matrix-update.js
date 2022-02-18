import { getMid } from "./move-validation";

export const matrixUpdate = (mat, player, surc, dest) => {
  if (dest[0] === surc[0] + 2 || dest[0] === surc[0] - 2) {
    mat[getMid(surc, dest)[0]][getMid(surc, dest)[1]] = 0;
  }

  mat[surc[0]][surc[1]] = 0;
  mat[dest[0]][dest[1]] = player;

  return mat;
};