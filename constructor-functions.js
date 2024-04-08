// gli oggetti in JS sono semplici sì da realizzare --> {} (notazione letterale)
// ma a patto che sia un singolo oggetto o fin tanto che sono pochi...
// il problema nasce quando abbiamo necessità di crearne molto in serie,
// magari tutti anonimi e indipendenti tra loro, ma con stesse coppie chiave/valore

const methodFunc = function () {
  // la variabile person potrebbe cambiare nel tempo, potrebbe non essere disponibile sempre ecc..
  // potremmo volerci riferire ad un'altra variabile di un oggetto simile che sia nato dalla clonazione di questo (quindi avrebbe un nome diverso)
  // con il THIS risolviamo questi problemi, perché acquisirà come valore il riferimento all'oggetto di appartenenza in automatico.
  console.log("Io sono: " + this.name);
};

const person = {
  name: "Gianni",
  surname: "Morandi",

  sayMyName: methodFunc
};

const person2 = {
  name: "Claudio",
  suranme: "Baglioni",
  sayMyName: methodFunc
};

person2.email = "claudio@baglioni.com";

person.sayMyName();
person2.sayMyName();

// veniamo quindi all'esigenza di creare oggetti in serie (tutti uguali a partire dalla stessa struttura)
// 1) funzione costruttrice (CONSTRUCTOR FUNCTION)
// per convenzione BISOGNA definirla in PascalCase (con tutte le prime lettere maiuscole)
// sarà una funzione che avrà la prima lettera maiuscola
// questo perché andrà usata in maniera particolare, e la prima lettera maiuscola veicolerà questa esigenza

// una funzionne costruttrice NON PUO' essere dichiarata come arrow!

// questa funzione ha lo scopo di GENERARE UN OGGETTO
const Person = function () {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
};

const giuseppeVerdi = new Person();
console.log(giuseppeVerdi);

giuseppeVerdi.name = "Giuseppe";
giuseppeVerdi.surname = "Verdi";
console.log(giuseppeVerdi);

// nuova matrice per la generazione di un oggetto, questa volta sfruttando i parametri della funzione stessa

const DynamicPerson = function (_name, _surname, _address, _email, _skills = []) {
  this.name = _name;
  this.surname = _surname;
  this.address = _address;
  this.email = _email;
  this.skills = _skills;
};

const marioSuper = new DynamicPerson("Mario", "Super", "Yoshi Island", "super@mario.com", ["jump", "grow", "fireballs"]);
const warioSuper = new DynamicPerson("Wario", "Super", "Wario Castle", "super@wario.com");

console.log(marioSuper);
console.log(warioSuper);

DynamicPerson.prototype.sayHello = function () {
  console.log("hello boyz and girlz, I am " + this.name + " " + this.surname);
};

marioSuper.sayHello();
warioSuper.sayHello();
