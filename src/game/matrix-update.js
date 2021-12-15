export const matrixUpdate = (mat, player, surc, dest) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i === surc[0] && j === surc[1]) mat[i][j] = 0;
      if (i === dest[0] && j === dest[1]) mat[i][j] = player;
    }
  }

  return mat;
};
