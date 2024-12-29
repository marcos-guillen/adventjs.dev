/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    // Code here
    let cadena = packages;
    let cierre = cadena.indexOf(")");
    while (cierre > 0) {
      let resto = cadena.substring(cierre + 1);
      let tmp = cadena.substring(0, cierre);
      let inv = tmp.lastIndexOf("(");
      let cadinv = tmp.substring(inv + 1);
      cadinv = cadinv.split("").reverse().join("");
      cadena = cadena.substring(0, inv) + cadinv + resto;
      cierre = cadena.indexOf(")");
    }
    return cadena;
  }