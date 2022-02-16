export const matrixUpdate = (mat, player, surc, dest) => {
  mat[surc[0]][surc[1]] = 0;
  mat[dest[0]][dest[1]] = player;

  return mat;
};