const music1 = {
  nome: "Cardigan",
  artist: "Taylor Swift",
  album: "Folklore",
  dur: 3.59,
  genre: "Folk-pop",
  saved: false,
};

const music2 = {
  nome: "Scott Street",
  artist: "Phoebe Bridgers",
  album: "Stranger in the Alps",
  dur: 5.05,
  genre: "Indie-folk",
  saved: true,
};

const music3 = {
  nome: "Everything in Its Right Place",
  artist: "Radiohead",
  album: "Kid A",
  dur: 4.11,
  genre: "Alternative Rock",
  saved: true,
};

const saved = [];

function isSaved(music) {
  if (music.saved == true) {
    saved.push(music);
  } else {
    console.log(`A música ${music.nome} não está salva 🎼💔`); ////////inserir alert
  }
}

isSaved(music1);
isSaved(music2);
isSaved(music3);

const media = (music1.dur + music2.dur + music3.dur) / 3;

console.log(
  `\nA média de minutos de músicas ouvidas hoje foi de ${media.toFixed(
    2
  )} 🎧🎶\n`
);

const favArtists = [
  "Taylor Swift",
  "Phoebe Bridgers",
  "Tamino",
  "Gracie Abrams",
  "Radiohead",
];

console.log(`\n🔊⏯️ This is your recently played songs 🔊⏯️ \n`);
console.table(music1);

console.table(music2);

console.table(music3);

console.log(`\n🌟🎵 This is your top favorite artists from last month 🎵🌟\n`);
console.table(favArtists);

console.log(`\n💖🎵 This is your saved songs 🎵💖\n`);
console.table(saved);
