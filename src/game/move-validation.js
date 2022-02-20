export const isMoveValid = (player, surc, dest, mat) => {
  if (
    !(
      surc[0] >= 0 &&
      surc[0] < 5 &&
      surc[1] >= 0 &&
      surc[1] < 5 &&
      dest[0] >= 0 &&
      dest[0] < 5 &&
      dest[1] >= 0 &&
      dest[1] < 5
    )
  ) {
    return false;
  }

  if (player === 1) {
    return isMoveValidP1(surc, dest, mat);
  } else if (player === 2) {
    return isMoveValidP2(surc, dest, mat);
  }

  return false;
};

const isMoveValidP1 = (surc, dest, mat) => {
  if (mat[dest[0]][dest[1]] === 1 || mat[dest[0]][dest[1]] === 2) {
    return false;
  }

  const temp = surc[0] + surc[1];
  if (temp % 2 === 0) {
    if (
      dest[0] === surc[0] + 1 &&
      (dest[1] === surc[1] ||
        dest[1] === surc[1] + 1 ||
        dest[1] === surc[1] - 1)
    ) {
      return true;
    } else if (
      dest[0] === surc[0] + 2 &&
      mat[getMid(surc, dest)[0]][getMid(surc, dest)[1]] === 2 &&
      (dest[1] === surc[1] ||
        dest[1] === surc[1] + 2 ||
        dest[1] === surc[1] - 2)
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    if (dest[0] === surc[0] + 1 && dest[1] === surc[1]) {
      return true;
    } else if (
      dest[0] === surc[0] + 2 &&
      dest[1] === surc[1] &&
      mat[getMid(surc, dest)[0]][getMid(surc, dest)[1]] === 2
    ) {
      return true;
    } else {
      return false;
    }
  }
};

const isMoveValidP2 = (surc, dest, mat) => {
  if (mat[dest[0]][dest[1]] === 2 || mat[dest[0]][dest[1]] === 1) {
    return false;
  }

  const temp = surc[0] + surc[1];
  if (temp % 2 === 0) {
    if (
      dest[0] === surc[0] - 1 &&
      (dest[1] === surc[1] ||
        dest[1] === surc[1] + 1 ||
        dest[1] === surc[1] - 1)
    ) {
      return true;
    } else if (
      dest[0] === surc[0] - 2 &&
      mat[getMid(surc, dest)[0]][getMid(surc, dest)[1]] === 1 &&
      (dest[1] === surc[1] ||
        dest[1] === surc[1] + 2 ||
        dest[1] === surc[1] - 2)
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    if (dest[0] === surc[0] - 1 && dest[1] === surc[1]) {
      return true;
    } else if (
      dest[0] === surc[0] - 2 &&
      dest[1] === surc[1] &&
      mat[getMid(surc, dest)[0]][getMid(surc, dest)[1]] === 1
    ) {
      return true;
    } else {
      return false;
    }
  }
};

export const getMid = (surc, dest) => {
  const mid = [-1, -1];
  mid[1] = (surc[1] + dest[1]) / 2;
  mid[0] = (surc[0] + dest[0]) / 2;
  return mid;
};