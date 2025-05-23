let playlist = ["metal", "trap", "kpop", "funk", "poprock", "mpb"];
console.log(`Antes do splice: ${playlist}`);

// removendo 2 elementos a partir do índice 2
let elementosRemovidos = playlist.splice(2, 2)
let desafio = playlist.splice(2, 3) // remover 2 elementos a partir do índice 3

console.log(`Depois do splice: ${playlist}`);
console.log(`Elementos removidos: ${elementosRemovidos}`);
