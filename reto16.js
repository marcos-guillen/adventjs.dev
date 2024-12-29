/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
    let sincambios = true;
    while (sincambios) {
      let long = s.length;
      if (long < 2) return s;
      let x = long - 1;
      while (x && sincambios) {
        if (s[x] === s[x - 1]) {
          s = s.substring(0, x - 1) + s.substring(x + 1);
          console.log("s", s, "x", x);
          sincambios = false;
        }
        x--;
      }
      sincambios = !sincambios;
    }
    // Code here
    return s;
  }
  /*
  Los elfos están trabajando arduamente para limpiar los caminos llenos de nieve mágica ❄️. Esta nieve tiene una propiedad especial: si dos montículos de nieve idénticos y adyacentes se encuentran, desaparecen automáticamente.
  
  Tu tarea es escribir una función que ayude a los elfos a simular este proceso. El camino se representa por una cadena de texto y cada montículo de nieve un carácter.
  
  Tienes que eliminar todos los montículos de nieve adyacentes que sean iguales hasta que no queden más movimientos posibles.
  
  El resultado debe ser el camino final después de haber eliminado todos los montículos duplicados:
  */
  removeSnow("zxxzoz"); // -> "oz"
  // 1. Eliminamos "xx", quedando "zzoz"
  // 2. Eliminamos "zz", quedando "oz"
  
  removeSnow("abcdd"); // -> "abc"
  // 1. Eliminamos "dd", quedando "abc"
  
  removeSnow("zzz"); // -> "z"
  // 1. Eliminamos "zz", quedando "z"
  
  removeSnow("a"); // -> "a"
  // No hay montículos repetidos
  