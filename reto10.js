/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
    let register = [0, 0, 0, 0, 0, 0, 0];
    const codA = "A".charCodeAt(0);
    let pc = 0;
    const ninst = instructions.length;
    let usado = false
    while (pc < ninst) {
      const instr = instructions[pc];
      const nemo = instr.split(" ");
      if (nemo[0] === "INC") {
        const indi = nemo[1].charCodeAt(0) - codA
        if (indi ===0) usado=true
        register[indi] =
          register[indi] + 1;
        pc++;
      } else if (nemo[0] === "DEC") {
        const indi = nemo[1].charCodeAt(0) - codA
        if (indi ===0) usado=true
        register[indi] =
          register[indi] - 1;
        pc++;
      } else if (nemo[0] === "MOV") {
        const indi = nemo[2].charCodeAt(0) - codA
        if (indi ===0) usado=true
        const num = Number(nemo[1]);
        if (Number.isNaN(num)) {
          const indi2 = nemo[1].charCodeAt(0) - codA
          if (indi2 ===0) usado=true
          register[nemo[2].charCodeAt(0) - codA] =
            register[nemo[1].charCodeAt(0) - codA];
        } else register[nemo[2].charCodeAt(0) - codA] = num;
        pc++;
      } else if (nemo[0] === "JMP") {
        const indi = nemo[1].charCodeAt(0) - codA
        if (indi ===0) usado=true
        if (register[indi] === 0) pc = Number(nemo[2]);
        else pc++;
      } else pc++;
    }
    if (!usado)
      return undefined
    return Number(register[0]);
  }

  const instructions = [
    "MOV -1 C", // copia -1 al registro 'C',
    "INC C", // incrementa el valor del registro 'C'
    "JMP C 1", // salta a la instrucción en el índice 1 si 'C' es 0
    "MOV C A", // copia el registro 'C' al registro 'a',
    "INC A", // incrementa el valor del registro 'a'
  ];
  
  compile(instructions); // -> 2