let playlist = ["funk", "poprock", "mpb", "yodeling"]
console.log(`Antes do pop: ${playlist}`);

// remove the last song
let musicaRemovida = playlist.pop();
console.log(`Depois do pop: ${playlist}`);
console.log(`Música removida: ${musicaRemovida}`);

let removeMais = playlist.pop();
console.log(`Depois do depois: ${playlist}`);
console.log(`Mais uma removida: ${removeMais}`);
