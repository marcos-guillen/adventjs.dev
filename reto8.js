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
/*
¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

La información que recibes:

    indices: Un array de enteros que representan el progreso de cada reno en la pista:
    0: El carril está vacío.
    Número positivo: La posición actual del reno desde el inicio de la pista.
    Número negativo: La posición actual del reno desde el final de la pista.
    length: La longitud de cada carril.

Devuelve un string que represente la pista de la carrera:

    Cada carril tiene exactamente length posiciones llenas de nieve (~).
    Cada reno se representa con la letra r.
    Los carriles están numerados al final con /1, /2, etc.
    La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.

Ejemplos:
*/
drawRace([0, 5, -3], 10)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8)
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12)
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/