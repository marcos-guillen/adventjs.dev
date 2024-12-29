/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  const arrapeso = [10, 5, 2, 1];
  let resultado = "";
  const resu = [];
  let ind = 0;
  while (weight) {
    if (weight >= arrapeso[ind]) {
      resu.push(arrapeso[ind]);
      weight -= arrapeso[ind];
    } else ind++;
  }
  resu.sort((a, b) => a - b);
  console.log(resu);
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };
  const caja1 = boxRepresentations[resu[0]];
  resultado += caja1[0];
  for (let x = 1; x < caja1.length; x++) resultado += "\n" + caja1[x];
  for (let x1 = 1; x1 < resu.length; x1++) {
    const caja2 = boxRepresentations[resu[x1]];
    const cajaa = boxRepresentations[resu[x1 - 1]];
    const resto = caja2[0].length - cajaa[0].length;
    console.log("resto", resto, "caja2", caja2);
    if (resto) resultado += caja2[0].substring(1, resto);

    for (let x = 1; x < caja2.length; x++) resultado += "\n" + caja2[x];
  }
  console.log(resultado);
  // Code here
  return "";
}
/*
¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:

    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|
     _________
10: |         |
    |_________|
*/
// Representación en JavaScript:
const boxRepresentations = {
  1: [" _ ", "|_|"],
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"],
};
/*
Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.
*/
distributeWeight(1);
// Devuelve:
//  _
// |_|

distributeWeight(2);
// Devuelve:
//  ___
// |___|

distributeWeight(3);
// Devuelve:
//  _
// |_|_
// |___|

distributeWeight(4);
// Devuelve:
//  ___
// |___|
// |___|

distributeWeight(5);
// Devuelve:
//  _____
// |     |
// |_____|

distributeWeight(6);
// Devuelve:
//  _
// |_|___
// |     |
// |_____|

// Nota: ¡Ten cuidado con los espacios en blanco! No añadas espacios en blanco a la derecha de una caja si no son necesarios.
