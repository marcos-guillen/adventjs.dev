/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    let salida = [];
    for (let x = 0; x < grid.length; x++) {
      let tmp = [];
      for (let y = 0; y < grid[x].length; y++) {
        let r = 0;
        if (y + 1 < grid[x].length && grid[x][y + 1]) r += 1;
        if (y - 1 >= 0 && grid[x][y - 1]) r += 1;
        if (x - 1 >= 0 && grid[x - 1][y]) r += 1;
        if (x + 1 < grid.length && grid[x + 1][y]) r += 1;
        if (x - 1 >= 0 && y - 1 >= 0 && grid[x - 1][y - 1]) r += 1;
        if (x - 1 >= 0 && y + 1 < grid[x].length && grid[x - 1][y + 1]) r += 1;
        if (x + 1 < grid.length && y - 1 >= 0 && grid[x + 1][y - 1]) r += 1;
        if (x + 1 < grid.length && y + 1 < grid[x].length && grid[x + 1][y + 1])
          r += 1;
        tmp.push(r);
      }
      salida.push(tmp);
    }
    console.log("salida", salida, "grid", grid);
    return salida;
  }
  /*
  El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).
  
  Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.
  */
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ]);
  // [
  //   [1, 2, 1],
  //   [2, 1, 1],
  //   [1, 1, 1]
  // ]
  
  detectBombs([
    [true, false],
    [false, false],
  ]);
  // [
  //   [0, 1],
  //   [1, 1]
  // ]
  
  detectBombs([
    [true, true],
    [false, false],
    [true, true],
  ]);
  
  // [
  //   [1, 1],
  //   [4, 4],
  //   [1, 1]
  // ]
  