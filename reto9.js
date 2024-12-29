/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    // Code here
    const indexEngine = board.findIndex((el) => el.includes("@"));
    const engine = board[indexEngine];
    const positionEngine = engine.indexOf("@");
  
    const char = {
      U: board[indexEngine - 1]?.[positionEngine],
      D: board[indexEngine + 1]?.[positionEngine],
      L: engine[positionEngine - 1],
      R: engine[positionEngine + 1],
    }[mov];
  
    return {
      "*": "eat",
      o: "crash",
      "·": "none",
      undefined: "crash",
    }[char];
  }