/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {  
  const mapa = new Map();
  let resu = [];
  shoes.forEach((element) => {
    let ele = mapa.get(element.size);
    if (ele) {
      if (ele.type === element.type) {
        ele.cantidad += 1;
        mapa.set(element.size, ele);
      } else {
        if (ele.cantidad === 1) {
          mapa.delete(element.size);
          resu.push(element.size);
        } else {
          ele.cantidad -= 1;
          mapa.set(element.size, ele);
          resu.push(element.size);
        }
      }
    } else {
      mapa.set(element.size, { type: element.type, cantidad: 1 });
    }
  });
  return resu;
}
  
  const shoes = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 42 },
  ];
  
  organizeShoes(shoes);
  // [38, 42]
  
  const shoes2 = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "I", size: 38 },
    { type: "I", size: 38 },
    { type: "R", size: 38 },
  ];
  // [38, 38]
  
  const shoes3 = [
    { type: "I", size: 38 },
    { type: "R", size: 36 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 43 },
  ];
  
  organizeShoes(shoes3);
  