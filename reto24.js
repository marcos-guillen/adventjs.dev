/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
    let resu = [];
    const iguales = (tr1, tr2) => {
      if (tr1.value !== tr2.value) return false;
      if (tr1.left) {
        if (tr2.right) return iguales(tr1.left, tr2.right);
        else return (false);
      } else if (tr2.right) return false;
      if (tr1.right) {
        if (tr2.left) return iguales(tr1.right, tr2.left);
        else return (false);
      } else if (tr2.left) return false;
      return true;
    };
    resu.push(iguales(tree1, tree2));
    resu.push(tree1.value);
    // Code here
    return resu;
  }
  /*
  En el Polo Norte, los elfos tienen dos árboles binarios mágicos que generan energía 🌲🌲 para mantener encendida la estrella navideña ⭐️. Sin embargo, para que funcionen correctamente, los árboles deben estar en perfecta sincronía como espejos 🪞.
  
  Dos árboles binarios son espejos si:
  
      Las raíces de ambos árboles tienen el mismo valor.
      Cada nodo del primer árbol debe tener su correspondiente nodo en la posición opuesta en el segundo árbol.
  
  Y el árbol se representa con tres propiedades value, left y right. Dentro de estas dos últimas va mostrando el resto de ramas (si es que tiene):
  
  const tree = {
    value: '⭐️',
    left: {
      value: '🎅'
      // left: {...}
      // right: { ... }
    },
    right: {
      value: '🎁'
      // left: { ... }
      // right: { ...&nbsp;}
    }
  }
  
  Santa necesita tu ayuda para verificar si los árboles están sincronizados para que la estrella pueda seguir brillando. Debes devolver un array donde la primera posición indica si los árboles están sincronizados y la segunda posición devuelve el valor de la raíz del primer árbol.
  */
  const tree1 = {
    value: "🎄",
    left: { value: "⭐" },
    right: { value: "🎅" },
  };
  
  const tree2 = {
    value: "🎄",
    left: { value: "🎅" },
    right: { value: "⭐" },
  };
  
  console.log(isTreesSynchronized(tree1, tree2)); // [true, '🎄']
  /*
    tree1          tree2
     🎄              🎄
    / \             / \
  ⭐   🎅         🎅   ⭐
  */
  
  const tree3 = {
    value: "🎄",
    left: { value: "🎅" },
    right: { value: "🎁" },
  };
  
  console.log(isTreesSynchronized(tree1, tree3)); // [false, '🎄']
  
  const tree4 = {
    value: "🎄",
    left: { value: "⭐" },
    right: { value: "🎅" },
  };
  
  console.log(isTreesSynchronized(tree1, tree4)); // [false, '🎄']
  
  console.log(isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" })); // [false, '🎅']
  