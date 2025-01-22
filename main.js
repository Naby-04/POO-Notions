let personne = [];
function Utilisateur(Prenom, Nom, Age) {
  this.prenom = Prenom;
  this.nom = Nom;
  this.age = Age;
}

Utilisateur.prototype.saluer = function () {
  return `Bonjour je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans`;
};

personne.push(
  new Utilisateur("Seydina Mohamed", "Diop", 20),
  new Utilisateur("Abdoul Wakhab", "Diouf", 23),
  new Utilisateur("Baba", "Faye", 22)
);

// console.table(personne);
// console.log(personne.map((etudiants) => etudiants.saluer()));

// ------------------------------------

class Eleves {
  constructor(nom, age) {
    // console.log("je suis constructeur de :", nom);

    this.nom = nom;
    this.age = age;
  }
  saluer() {
    return `Bonjour je m'appelle ${this.nom} et j'ai ${this.age} ans`;
  }
}
const alice2 = new Eleves("alice2", 30);

let ensembleEleves = [
  new Eleves("Seydina Mohamed", 20),
  new Eleves("Abdoul Wakhab", 20),
  new Eleves("Baba", 20),
];
console.table(ensembleEleves);

// ---------------------

class Voiture {
  constructor(marque, modele) {
    console.log("je suis le constructeur de: ", marque, modele);

    this.marque = marque;
    this.modele = modele;
  }
  demarer() {
    console.log("Vroom !");
  }
}

const voiture1 = new Voiture("Mercedes", "Benz");
const voiture2 = new Voiture("BMW", "X6").demarer();
