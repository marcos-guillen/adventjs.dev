/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  let cab1 = 1000000;
  let cab2 = 1000000;
  let linea = 0;
  for (const ele of box) {
    const cab = ele.indexOf("##");
    if (cab >= 0) {
      if (cab1 === 1000000) {
        cab1 = linea;
      } else cab2 = linea;
    }
    const regalo = ele.indexOf("*");
    if (regalo >= 0) {
      if (linea > cab1 && linea < cab2) {
        const pri = ele.indexOf("#");
        const ult = ele.lastIndexOf("#");
        return regalo > pri && regalo < ult;
      }
      return false;
    }
    linea++;
  }
  return false;
}
/*
Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

    Está rodeada por # en los bordes de la caja.
    El * no está en los bordes de la caja.

Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

Ejemplos:
*/

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false