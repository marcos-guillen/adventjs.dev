/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    // Code here
    if (names && Array.isArray(names) && names.length > 0) {
      let tamanyo = 0;
      let arr1 = "";
      names.forEach((element) => {
        if (element.length > tamanyo) tamanyo = element.length;
      });
      const borde1 = "*".repeat(tamanyo + 4);
      arr1 += borde1 + "\n";
      names.forEach((element) => {
        const cad1 = "* " + element + " ".repeat(tamanyo - element.length) + " *";
        arr1 += cad1 + "\n";
      });
      arr1 += borde1;
      return arr1;
    }
    return "*";
  }
  