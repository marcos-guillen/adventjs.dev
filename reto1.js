/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
    // Code here
      if (gifts && Array.isArray(gifts) && gifts.length>0) {
        const set1 = new Set(gifts)
        const arr1 = Array.from(set1)
        return arr1
        .sort((a, b) => a - b)
        .every((esNumero) => {
          return (
            typeof esNumero === "number" &&
            Number.isInteger(esNumero) &&
            esNumero > 0
          );
        })
        ? arr1
        : [];
      }
      return []
  }
  