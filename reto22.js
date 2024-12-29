/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    const combinations = (iterable, r) => {
      const pool = Array.from(iterable);
      const n = pool.length;
      if (r > n) return [];
  
      const indices = Array.from({ length: r }, (_, i) => i);
      const result = [];
  
      const yieldCombination = () => {
        result.push(indices.map((i) => pool[i]));
      };
  
      yieldCombination();
  
      while (true) {
        let i;
        for (i = r - 1; i >= 0; i--) {
          if (indices[i] !== i + n - r) {
            break;
          }
        }
        if (i < 0) return result;
  
        indices[i]++;
        for (let j = i + 1; j < r; j++) {
          indices[j] = indices[j - 1] + 1;
        }
        yieldCombination();
      }
    };
  
    const combs = [];
    for (let i = 1; i <= gifts.length; i++) {
      const els = combinations(gifts, i);
      combs.push(...els);
    }
    return combs;
  }
  
  /*
  Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.
  
  Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.
  
  Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.
  */
  console.log(generateGiftSets(["car", "doll", "puzzle"]));
  // [
  //   ['car'],
  //   ['doll'],
  //   ['puzzle'],
  //   ['car', 'doll'],
  //   ['car', 'puzzle'],
  //   ['doll', 'puzzle'],
  //   ['car', 'doll', 'puzzle']
  // ]
  
  console.log(generateGiftSets(["ball"]));
  // [
  //   ['ball']
  // ]
  
  console.log(generateGiftSets(["game", "pc"]));
  // [
  //   ['game'],
  //   ['pc'],
  //   ['game', 'pc']
  // ]
  
  console.log(
    generateGiftSets(["pen", "notebook", "eraser", "pencil", "marker"])
  );
  /*
  [
    [
      "pen"
    ],
    [
      "notebook"
    ],
    [
      "eraser"
    ],
    [
      "pencil"
    ],
    [
      "marker"
    ],
    [
      "pen",
      "notebook"
    ],
    [
      "pen",
      "eraser"
    ],
    [
      "pen",
      "pencil"
    ],
    [
      "pen",
      "marker"
    ],
    [
      "notebook",
      "eraser"
    ],
    [
      "notebook",
      "pencil"
    ],
    [
      "notebook",
      "marker"
    ],
    [
      "eraser",
      "pencil"
    ],
    [
      "eraser",
      "marker"
    ],
    [
      "pencil",
      "marker"
    ],
    [
      "pen",
      "notebook",
      "eraser"
    ],
    [
      "pen",
      "notebook",
      "pencil"
    ],
    [
      "pen",
      "notebook",
      "marker"
    ],
    [
      "pen",
      "eraser",
      "pencil"
    ],
    [
      "pen",
      "eraser",
      "marker"
    ],
    [
      "pen",
      "pencil",
      "marker"
    ],
    [
      "notebook",
      "eraser",
      "pencil"
    ],
    [
      "notebook",
      "eraser",
      "marker"
    ],
    [
      "notebook",
      "pencil",
      "marker"
    ],
    [
      "eraser",
      "pencil",
      "marker"
    ],
    [
      "pen",
      "notebook",
      "eraser",
      "pencil"
    ],
    [
      "pen",
      "notebook",
      "eraser",
      "marker"
    ],
    [
      "pen",
      "notebook",
      "pencil",
      "marker"
    ],
    [
      "pen",
      "eraser",
      "pencil",
      "marker"
    ],
    [
      "notebook",
      "eraser",
      "pencil",
      "marker"
    ],
    [
      "pen",
      "notebook",
      "eraser",
      "pencil",
      "marker"
    ]
  ]
  */
  /*
  Nota: En el array de entrada siempre habrá al menos un juguete y nunca habrá juguetes duplicados.
  
  Consejo: Hay muchas formas de solucionar este problema, pero el backtracking puede ser una buena opción. 😉
  */
  