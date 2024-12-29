/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    let salida = {};
  if (inventory && Array.isArray(inventory) && inventory.length > 0) {
    inventory.forEach((element) => {
      const { name, quantity, category } = element;
      if (salida[category]) {
        if (salida[category][name]) {
          salida = {
            ...salida,
            [category]: {
              ...salida[category],
              [name]: quantity + salida[category][name],
            },
          };
        } else {
          salida = {
            ...salida,
            [category]: { ...salida[category], [name]: quantity },
          };
        }
      } else {
        salida = { ...salida, [category]: { [name]: quantity } };
      }
    });
    return salida
  }
  return {};
}