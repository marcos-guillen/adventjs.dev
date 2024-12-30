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
/*
¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

    El árbol está compuesto de triángulos de caracteres especiales.
    Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
    Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
    El árbol siempre debe tener la misma longitud por cada lado.
    Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.

Ejemplos:
*/
const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/

// Asegúrate de utilizar saltos de línea \n al final de cada línea, excepto en la última.