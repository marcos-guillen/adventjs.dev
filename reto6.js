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