export const isMoveValid = (player, surc, dest, mat) => {
    if (player === 1) {
      return isMoveValidP1(surc, dest, mat);
    } else if (player === 2) {
      return isMoveValidP2(surc, dest, mat);
    }
  };
  // player 1 is red 

  const isMoveValidP1 = (surc, dest, mat) => {
      
    if (mat[dest[0]][dest[1]] === 1) {
      return false;
    }
    if(mat[dest[0]][dest[1]]==2) return false;
  
    const temp = surc[0] + surc[1];
    if (temp % 2 === 0) {
      if (dest[0] === surc[0] + 1 &&(dest[1] === surc[1] ||dest[1] === surc[1] + 1 ||dest[1] === surc[1] - 1)) {

                // if i have red 
                let new_x = dest[0];
                let new_y = dest[1];
                // samene ki condition 
                if(mat[new_x-1][new_y]===2){
                     mat[new_x-1][new_y] =0;
                     return true;
                }
                if(mat[new_x-2][new_y-1]===2){
                    mat[new_x-2][new_y-1] =0;
                    return true;
               }

      } else {
        return false;
      }
    } else {
      if (dest[0] === surc[0] + 1 && dest[1] === surc[1]) {
                let new_x = dest[0];
                let new_y = dest[1];
                // samene ki condition 
                if(mat[new_x-1][new_y]===2){
                     mat[new_x-1][new_y] =0;
                     
                }
                if(mat[new_x-2][new_y-1]===2){
                    mat[new_x-2][new_y-1] =0;
                    
               }
               return true;
      } else {
        return false;
      }
    }
  };
  
  const isMoveValidP2 = (surc, dest, mat) => {
    if (mat[dest[0]][dest[1]] === 2) {
      return false;
    }
    if(mat[dest[0]][dest[1]]==1) return false;
  
    const temp = surc[0] + surc[1];
    if (temp % 2 === 0) {
      if (
        dest[0] === surc[0] - 1 &&
        (dest[1] === surc[1] ||
          dest[1] === surc[1] + 1 ||
          dest[1] === surc[1] - 1)
      ) {
        let new_x = dest[0];
        let new_y = dest[1];
        // samene ki condition 
        if(mat[new_x+1][new_y]===1){
             mat[new_x+1][new_y] =0;
             return true;
        }
        if(mat[new_x+2][new_y+1]===2){
            mat[new_x+2][new_y+1] =0;
            return true;
       }
       return true;
      } else {
        return false;
      }
    } else {
      if (dest[0] === surc[0] - 1 && dest[1] === surc[1]) {
        let new_x = dest[0];
        let new_y = dest[1];
        // samene ki condition 
        if(mat[new_x+1][new_y]===1){
             mat[new_x+1][new_y] =0;
             return true;
        }
        if(mat[new_x+2][new_y+1]===2){
            mat[new_x+2][new_y+1] =0;
            return true;
       }
       return true;
      } else {
        return false;
      }
    }
  };