/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    const map1 = new Map();
    console.log(inventory);
    if (inventory && Array.isArray(inventory) && inventory.length > 0) {
      inventory.forEach((element) => {
        const { name, quantity, category } = element;
        console.log("elemento: ", element);
        let cate = map1.get(category);
        console.log("cate", cate);
        if (cate) {
          let nombre = cate.get(name);
          if (nombre) {
            cate.set(name, (nombre += quantity));
          } else {
            cate.set(name, quantity);
          }
        } else {
          cate = new Map();
          cate.set(name, quantity);
        }
        map1.set(category, cate);
        console.log(map1);
      });
  
      console.log(Object.fromEntries(map1));
      return map1;
    }
    // Code here
    return {};
  }
  
  const inventory = [
    { name: "doll", quantity: 5, category: "toys" },
    { name: "car", quantity: 3, category: "toys" },
    { name: "ball", quantity: 2, category: "sports" },
    { name: "car", quantity: 2, category: "toys" },
    { name: "racket", quantity: 4, category: "sports" },
  ];
  
  console.log(organizeInventory(inventory));
  
  // Resultado esperado:
  // {
  //   toys: {
  //     doll: 5,
  //     car: 5
  //   },
  //   sports: {
  //     ball: 2,
  //     racket: 4
  //   }
  
  const inventory2 = [
    { name: "book", quantity: 10, category: "education" },
    { name: "book", quantity: 5, category: "education" },
    { name: "paint", quantity: 3, category: "art" },
  ];
  
  organizeInventory(inventory2);
  
  // Resultado esperado:
  // {
  //   education: {
  //     book: 15
  //   },
  //   art: {
  //     paint: 3
  //   }
  // }
  