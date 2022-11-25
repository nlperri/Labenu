const music1 = "CARDIGAN";
const artist1 = "Taylor Swift";
const album1 = "Folklore";
const dur1 = 3.59;
const genre1 = "Folk-pop";
const save1 = false;

const music2 = "SCOTT STREET";
const artist2 = "Phoebe Bridgers";
const album2 = "Stranger in the Alps";
const dur2 = 5.05;
const genre2 = "Indie-folk";
const save2 = true;

const music3 = "EVERYTHING IN ITS RIGHT PLACE";
const artist3 = "Radiohead";
const album3 = "Kid A";
const dur3 = 4.11;
const genre3 = "Alternative Rock";
const save3 = true;

const media = (dur1 + dur2 + dur3) / 3;

console.log(
  `\nA média de minutos de músicas ouvidas hoje foi de ${media.toFixed(2)}\n`
);

const favArtists = [
  "Taylor Swift",
  "Phoebe Bridgers",
  "Tamino",
  "Gracie Abrams",
  "Radiohead",
];

function data(music, artist, album, dur, genre, save) {
  const info = [music, artist, album, dur, genre, save];
  return info;
}

console.table(data(music1, artist1, album1, dur1, genre1, save1));

console.table(data(music2, artist2, album2, dur2, genre2, save2));

console.table(data(music3, artist3, album3, dur3, genre3, save3));

console.log(`\n-----This is your top favorite artists from last month:-----\n`);
console.table(favArtists);
