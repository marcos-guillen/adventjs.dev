/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
    let arrage = agenda.split("\n");
    let encontrados = 0;
    let resu = {};
    let cadena = "";
    let indgt1;
    let indgt2;
    for (let cad of arrage) {
      console.log(cad);
      const indt1 = cad.indexOf("+");
      const indt2 = cad.indexOf(" ", indt1);
      let telef;
      if (indt2 > 0) telef = cad.substring(indt1, indt2);
      else telef = cad.substring(indt1);
      const inde = telef.indexOf(phone);
      if (inde >= 0) {
        encontrados++;
        if (encontrados > 1) return null;
        cadena = cad;
        indgt1 = indt1;
        indgt2 = indt2;
      }
      console.log("telef", telef, "indt1", indt1, "indt2", indt2);
    }
    if (cadena === "") return null;
    const indn1 = cadena.indexOf("<");
    const indn2 = cadena.indexOf(">", indn1);
    const name = cadena.substring(indn1 + 1, indn2);
    resu["name"] = name;
    const orden = [indn1, indn2, indgt1, indgt2 === -1 ? 999 : indgt2];
    orden.sort((a, b) => a - b);
    let address = "";
    if (orden[0] !== 0) {
      address = cadena.substring(0, orden[0]).trim();
    } else if (orden[2] - orden[1] > 2) {
      address = cadena.substring(orden[1] + 1, orden[2] - 1).trim();
    } else address = cadena.substring(orden[3] + 1).trim();
    resu["address"] = address;
    console.log("orden", orden);
    // Code here
    console.log("resu", resu);
    return resu;
  }
  /*
  Santa Claus tiene una agenda mágica 📇 donde guarda las direcciones de los niños para entregar los regalos. El problema: la información de la agenda está mezclada y malformateada. Las líneas contienen un número de teléfono mágico, el nombre de un niño y su dirección, pero todo está rodeado de caracteres extraños.
  
  Santa necesita tu ayuda para encontrar información específica de la agenda. Escribe una función que, dado el contenido de la agenda y un número de teléfono, devuelva el nombre del niño y su dirección.
  
  Ten en cuenta que en la agenda:
  
      Los números de teléfono están formateados como +X-YYY-YYY-YYY (donde X es uno o dos dígitos, e Y es un dígito).
      El nombre de cada niño está siempre entre < y >
  
  La idea es que escribas una funcióna que, pasándole el teléfono completo o una parte, devuelva el nombre y dirección del niño. Si no encuentra nada o hay más de un resultado, debes devolver null.
  */
  const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
  Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
  <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;
  
  findInAgenda(agenda, "34-600-123-456");
  // { name: "Juan Perez", address: "Calle Gran Via 12" }
  
  findInAgenda(agenda, "600-987");
  // { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }
  
  findInAgenda(agenda, "111");
  // null
  // Explicación: No hay resultados
  
  findInAgenda(agenda, "1");
  // null
  // Explicación: Demasiados resultados
  