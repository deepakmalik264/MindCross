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
    // if all pieces of player 1 are moveable or not
    let ismove = false;
    for (let i = 0; i < 5; i++) {
      let flag = false;
      for (let j = 0; j < 5; j++) {
              
          // if current pieces is he moveable
              let res = isCurrentPieceMoveable(player,i,j,mat);
              if(res) {
                flag = true;
                ismove = true;
                break;
              }
  
      }
      if(flag) break;
    }
    if(ismove){
         return isMoveValidP1(surc, dest, mat);
    }else return false; 
  } else if (player === 2) {

    let ismove = false;
    for (let i = 0; i < 5; i++) {
      let flag = false;
      for (let j = 0; j < 5; j++) {
              
          // if current pieces is he moveable
              let res = isCurrentPieceMoveable(player,i,j,mat);
              if(res) {
                ismove = true;
                flag = true;
                break;
                
              }
  
      }
      if(flag) break;
    }
    if(ismove){
         return isMoveValidP2(surc, dest, mat);
    }else return false;
  }

  return false;
};

const isCurrentPieceMoveable = (player, i, j, mat) => {
  let current_x = i;
  let current_y = j;
  let pos = current_x + current_y;

  if (player === 1) {
    if (pos % 2 == 0) {
      if (isMoveValid(player,[i,j],[i+1,j+1],mat)&&mat[current_x + 1][current_y + 1] === 0) {
        return true;
      } else if (isMoveValid(player,[i,j],[i+1,j+1],mat)&&mat[current_x + 1][current_y + 1] === 2) {
        if (isMoveValid(player,[i,j],[i+2,j+2],mat)&&mat[current_x + 2][current_y + 2] == 0) {
          return true;
        } else return false;
      } else if (isMoveValid(player,[i,j],[i+1,j],mat)&&mat[current_x + 1][current_y] == 0) {
        return true;
      } else if (isMoveValid(player,[i,j],[i+1,j],mat)&&mat[current_x + 1][current_y] == 2) {
        if (isMoveValid(player,[i,j],[i+2,j],mat)&&(mat[current_x + 2][current_y] = 0)) return true;
      } else if (isMoveValid(player,[i,j],[i-1,j-1],mat)&&mat[current_x - 1][current_y - 1] === 0) {
        return true;
      } else if (isMoveValid(player,[i,j],[i-1,j-1],mat)&&mat[current_x - 1][current_y - 1] == 2) {
        if (isMoveValid(player,[i,j],[i-2,j-2],mat)&&mat[current_x - 2][current_y - 2] == 0) {
          return true;
        } else return false;
      } else return false;
      // forward
    } else {
      if (isMoveValid(player,[i,j],[i+1,j],mat)&&mat[current_x + 1][current_y] == 0) {
        return true;
      } else if (isMoveValid(player,[i,j],[i+1,j],mat)&&mat[current_x + 1][current_y] == 2) {
        if (isMoveValid(player,[i,j],[i+2,j],mat)&&(mat[current_x + 2][current_y] = 0)) return true;
      } else return false;
    }
  }

  if (player === 2) {
    if (pos % 2 == 0) {
      
      if (isMoveValid(player,[i,j],[i-1,j-1],mat)&&mat[current_x - 1][current_y - 1] === 0) {
        return true;
      } else if (isMoveValid(player,[i,j],[i-1,j-1],mat)&&mat[current_x - 1][current_y - 1] === 1) {
        if (isMoveValid(player,[i,j],[i-2,j-2],mat)&&mat[current_x - 2][current_y - 2] == 0) {
          return true;
        } else return false;
      } else if (isMoveValid(player,[i,j],[i-1,j],mat)&&mat[current_x - 1][current_y] == 0) {
        return true;
      } else if (isMoveValid(player,[i,j],[i-1,j],mat)&&mat[current_x - 1][current_y] == 1) {
        if (isMoveValid(player,[i,j],[i+2,j],mat)&&(mat[current_x + 2][current_y] = 0)) return true;
      } else if (isMoveValid(player,[i,j],[i+1,j+1],mat)&&mat[current_x + 1][current_y + 1] === 0) {
        return true;
      } else if (isMoveValid(player,[i,j],[i+1,j+1],mat)&&mat[current_x + 1][current_y + 1] == 1) {
        if (isMoveValid(player,[i,j],[i+2,j+2],mat)&&mat[current_x + 2][current_y + 2] == 0) {
          return true;
        } else return false;
      } else return false;
    } else {
      if (isMoveValid(player,[i,j],[i-1,j],mat)&&mat[current_x - 1][current_y] == 0) {
        return true;
      } else if (isMoveValid(player,[i,j],[i-1,j],mat)&&mat[current_x - 1][current_y] == 1) {
        if (isMoveValid(player,[i,j],[i-2,j],mat)&&(mat[current_x - 2][current_y] = 0)) return true;
      } else return false;
    }
  }
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
