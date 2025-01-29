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
// console.table(ensembleEleves);

// ---------------------

class Voiture {
  constructor(marque, modele) {
    // console.log("je suis le constructeur de: ", marque, modele);

    this.marque = marque;
    this.modele = modele;
  }
  demarer() {
    console.log("Vroom !");
  }
}

const voiture1 = new Voiture("Mercedes", "Benz");
// const voiture2 = new Voiture("BMW", "X6").demarer();

// --------------------------------
class Comptebanquaire {
  #Solde = 0; //Propriété privée
  deposer(montant) {
    this.#Solde += montant;
  }
  afficherSolde() {
    console.log(`solde : ${this.#Solde} FCFA`);
  }
}
const compte = new Comptebanquaire();
compte.deposer(3000);
// compte.afficherSolde();

// --------------------------------

class Personnage {
  constructor(nom, rôle, hp, attk) {
    this.nom = nom;
    this.rôle = rôle;
    this.hp = hp;
    this.attk = attk;
  }
  // --------------------------------
  attaquer(personnage) {
    console.log(
      `${this.nom} attaque ${personnage} avec une puissance de ${this.attk}`
    );
  }
  subirAttaque(attk) {
    this.hp -= attk;
    console.log(`${this.nom} subit une attaque avec une puissance de ${attk}`);
    console.log(`Il reste à ${this.nom} ${this.hp} d'hp.`);
  }
}
const personnage1 = new Personnage("livai", "combattant", 1400, 500);
const personnage2 = new Personnage("ErenTitan", "combattant", 5400, 1000);
personnage1.attaquer("ErenTitan");
personnage2.subirAttaque(500);
// --------------------------------
class PersonneGetters {
  #nom;
  constructor(nom) {
    this.#nom = nom;
  }
  get nom() {
    return this.#nom;
  }
  set nom(valeur) {
    if (valeur) {
      this.#nom = valeur;
    }
  }
}
const Alice = new PersonneGetters("Alice");
// console.log(Alice.nom);
Alice.nom = "Bob";
// console.log(Alice.nom);
