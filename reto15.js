/**
 * @param {Array<Object>} data
 * @returns {string}
 */
function drawTable(data) {
    let dimen = {};
    for (let obj of data) {
      for (let [key, value] of Object.entries(obj)) {
        if (!isNaN(value)) value = value.toString();
        if (Object.hasOwn(dimen, key)) {
          if (dimen[key] < value.length) {
            dimen[key] = value.length;
          }
        } else {
          dimen[key] = key.length > value.length ? key.length : value.length;
        }
      }
    }
    console.log(dimen);
    let resu = "";
    let cadc = "";
    for (let [key, value] of Object.entries(dimen)) {
      cadc += "+" + "-".repeat(value + 2);
    }
    resu += cadc + "+\n";
    for (let [key, value] of Object.entries(dimen)) {
      resu +=
        "| " +
        key[0].toUpperCase() +
        key.substring(1) +
        " ".repeat(value - key.length + 1);
    }
    resu += "|\n" + cadc + "+\n";
  
    for (let obj of data) {
      for (let [key, value] of Object.entries(dimen)) {
        let campo = obj[key];
        if (!isNaN(campo)) campo = campo.toString();
        resu += "| " + campo + " ".repeat(value - campo.length + 1);
      }
      resu += "|\n";
    }
    resu += cadc + "+";
  
    console.log(resu);
    // Code here
    return resu;
  }
  /*
  Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.
  
  Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.
  
  La tabla dibujada debe representar los datos del objeto de la siguiente manera:
  
      Tiene una cabecera con el nombre de la columna.
      El nombre de la columna pone la primera letra en mayúscula.
      Cada fila debe contener los valores de los objetos en el orden correspondiente.
      Cada valor debe estar alineado a la izquierda.
      Los campos dejan siempre un espacio a la izquierda.
      Los campos dejan a la derecha el espacio necesario para alinear la caja.
  
  Mira el ejemplo para ver cómo debes dibujar la tabla:
  */
  drawTable([
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "New York" },
  ]);
  // +---------+-----------+
  // | Name    | City      |
  // +---------+-----------+
  // | Alice   | London    |
  // | Bob     | Paris     |
  // | Charlie | New York  |
  // +---------+-----------+
  
  drawTable([
    { gift: "Doll", quantity: 10 },
    { gift: "Book", quantity: 5 },
    { gift: "Music CD", quantity: 1 },
  ]);
  // +----------+----------+
  // | Gift     | Quantity |
  // +----------+----------+
  // | Doll     | 10       |
  // | Book     | 5        |
  // | Music CD | 1        |
  // +----------+----------+
  