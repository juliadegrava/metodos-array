let playlist = ["metal", "trap", "kpop", "funk", "poprock", "mpb"];
let playlistEmCaps = playlist.map(songs => songs.toUpperCase());
console.log(`Playlist em maiúsculas: ${playlistEmCaps.join(", ")}`);

let maiuscula = playlist.map(item => item.toUpperCase());
console.log(`Maiúsculas com map(): ${maiuscula.join(', ')}`);

let minuscula = playlist.map(item => item.toLowerCase());
console.log(`Minúsculas com map(): ${minuscula.join(', ')}`);

let numeros = [10, 20, 30, 40, 50];
let dobrados = numeros.map(n => n * 2);
console.log(`Valores dobrados: $(dobrados.join(', ')}`);

let metades = numeros.map(n => n / 2);
console.log(`Valores pela metade: ${metades.join(', ')}`);

let comoTexto = numeros.map(n => `${n} pts`);
console.log(`Como texto: ${comoTexto.join(', ')}`);
