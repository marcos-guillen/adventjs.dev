/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
    received.sort();
    expected.sort();
    let indr = received.length - 1;
    let inde = expected.length - 1;
    let missing = {};
    let extra = {};
    const fmissing = (dato) => {
      if (missing[dato]) missing[dato] = missing[dato] + 1;
      else missing[dato] = 1;
    };
    const fextra = (dato) => {
      if (extra[dato]) extra[dato] = extra[dato] + 1;
      else extra[dato] = 1;
    };
    while (inde >= 0 && indr >= 0) {
      console.log(
        "indr",
        indr,
        "received[indr]",
        received[indr],
        "inde",
        inde,
        "expected[inde]",
        expected[inde]
      );
      if (received[indr] === expected[inde]) {
        indr--;
        inde--;
      } else if (received[indr] < expected[inde]) {
        fmissing(expected[inde]);
        /*
        if (missing[expected[inde]])
          missing[expected[inde]] = missing[expected[inde]] + 1;
        else missing[expected[inde]] = 1;
        */
        inde--;
      } else {
        fextra(received[indr]);
        /*
        if (extra[received[indr]])
          extra[received[indr]] = extra[received[indr]] + 1;
        else extra[received[indr]] = 1;
        */
        indr--;
      }
    }
    if (indr < 0) {
      while (inde >= 0) {
        fmissing(expected[inde--]);
      }
    } else if (inde < 0) {
      while (indr >= 0) {
        fextra(received[indr--]);
      }
    }
    // Escribe tu código aquí
    console.log("missing", missing, "extra", extra);
    return {
      missing,
      extra,
    };
  }
  /*
  Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.
  
  Recibirás dos arrays:
  
      received: Lista con los regalos que Santa tiene actualmente.
      expected: Lista con los regalos que Santa debería tener.
  
  Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:
  
      missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
      extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.
  
  Ten en cuenta que:
  
      Los regalos pueden repetirse en ambas listas.
      Las listas de regalos están desordenadas.
      Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.
  */
  fixGiftList(
    ["puzzle", "car", "doll", "car"],
    ["car", "puzzle", "doll", "ball"]
  );
  // Devuelve:
  // {
  //   missing: { ball: 1 },
  //   extra: { car: 1 }
  // }
  
  fixGiftList(
    ["book", "train", "kite", "train"],
    ["train", "book", "kite", "ball", "kite"]
  );
  // Devuelve:
  // {
  //   missing: { ball: 1, kite: 1 },
  //   extra: { train: 1 }
  // }
  
  fixGiftList(
    ["bear", "bear", "car"],
    ["bear", "car", "puzzle", "bear", "car", "car"]
  );
  // Devuelve:
  // {
  //   missing: { puzzle: 1, car: 2 },
  //   extra: {}
  // }
  
  fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"]);
  // Devuelve:
  // {
  //   missing: {},
  //   extra: {}
  // }
  
  fixGiftList(["car", "puzzle", "car"], ["puzzle", "car", "doll"]);
  // Devuelve:
  // {
  //   missing: {"doll": 1},
  //   extra: {"car": 1}
  // }
  