/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    const tamanyo = 2 * height - 1;
    let dibu = 1;
    let resu = "";
    let sub;
    while (dibu <= tamanyo) {
      sub = (tamanyo - dibu) / 2;
      resu += "_".repeat(sub) + ornament.repeat(dibu) + "_".repeat(sub) + "\n";
      dibu += 2;
    }
    sub = (tamanyo - 1) / 2;
    resu += "_".repeat(sub) + "#" + "_".repeat(sub) + "\n";
    resu += "_".repeat(sub) + "#" + "_".repeat(sub);
    return resu;
  }