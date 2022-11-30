let nacionalidade;

/* O programa aceita as seguintes nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;*/

nacionalidade = "argentina";

if (nacionalidade === "brasileira") {
  console.log(
    `Sua nacionalidade é brasileira. \nVocê pode participar do nosso programa! `
  );
} else if (nacionalidade === "argentina") {
  console.log(
    `Sua nacionalidade é argentina. \nVocê pode participar do nosso programa! `
  );
} else if (nacionalidade === "uruguaia") {
  console.log(
    `Sua nacionalidade é uruguaia. \nVocê pode participar do nosso programa!`
  );
} else if (nacionalidade === "chilena") {
  console.log(
    `Sua nacionalidade é chilena. \nVocê pode participar do nosso programa!`
  );
} else if (nacionalidade === "colombiana") {
  console.log(
    `Sua nacionalidade é colombiana. \nVocê pode participar do nosso programa!`
  );
} else {
  console.log(`Sua nacionalidade não está cadastrada no nosso programa.`);
}
