/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let despl = indices.length - 1;
    let salida = "";
    let ind = 1;
    for (let ele of indices) {
      if (ind > 1) salida += "\n";
      salida += " ".repeat(despl--);
      if (ele === 0) salida += "~".repeat(length) + " /" + ind++;
      else {
        if (ele > 0)
          salida +=
            "~".repeat(ele) + "r" + "~".repeat(length - ele - 1) + " /" + ind++;
        else
          salida +=
            "~".repeat(length + ele) + "r" + "~".repeat(-ele - 1) + " /" + ind++;
      }
    }
    return salida;
  }