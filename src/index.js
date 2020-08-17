const { ordena } = require("./sortIds");

const entrada = [2, 3, 1, 3, 2, 4, 6, 9, 2];
const ordem = [2, 1, 4, 3, 9, 6];

const saida = ordena(ordem, entrada);

console.log(saida);
