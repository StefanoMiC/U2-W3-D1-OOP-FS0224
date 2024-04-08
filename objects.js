// JavaScript ha la particolarità di permetterci di creare oggetti con notazione letterale, ovvero l'uso di semplici {} come valore di una variabile o
// qualsiasi altro contenitore. E' possibile poi assegnare valori tra i tipi primitivi: string, number, boolean, undefined, null, bigInt, symbol... ecc
// associati ad una chiave che potrà essere richiamata in un secondo momento tramite "dot notation" . oppure "square brackets notation" []

// I valori primitivi si creano semplicemente in memoria
// Tutto quello che NON E' una primitiva si associa in memoria tramite una "referenza" (REFERENCE) o indirizzo.
// bisognerà stare attenti nel momento in cui proveremo a clonare/utilizzre un valore NON PRIMITIVO in un altro contenitore

const obj = {}; // <-- questo rappresenta già la creazione di una REFERENCE in memoria per un oggetto vuoto

console.log(obj.toString()); // [object Object]

console.log("OBJ", obj);

const dog = {
  breed: "Labrador",
  age: 2,

  // una funzione associata alla proprietà di un oggetto si definisce il METODO dell'oggetto
  bark: function () {
    console.log("BAU");
  },

  // un altro possibilità per creare un metodo, come fosse una dichiarazione di funzione senza la keyword "function"
  angryBark() {
    console.log("WOFFFF!!!!!");
  }
};

dog.bark();
dog.bark();
dog.bark();
dog.angryBark();
dog.bark();
dog.bark();

console.log(dog.hasOwnProperty("breed")); // true
// ci risponde true anche se hasOwnProperty non l'abbiamo mai definito. è un metodo che troverà nella sua catena prototipale,
// quindi sull'oggetto costruttore di cui lui ha riferimento tramite la proprietà "__proto__"

// dot notation "il puntino" . per estrarre una proprietà da un oggetto.
document.body.innerHTML += `Your dog is a: ${dog.breed} of ${dog.age} years old.`;

console.log(dog.__proto__); // Object
console.log(dog.__proto__.__proto__); // null - non c'è niente più in alto di Object

const arr = [];
console.log(arr.__proto__); // Array
console.log(arr.__proto__.__proto__); // Object
console.log(arr.__proto__.__proto__.__proto__); // null

const str = "Epicode";
console.dir(str.__proto__); // String
console.dir(str.__proto__.__proto__); // Object
console.dir(str.__proto__.__proto__.__proto__); // null

const func = function () {};
console.dir(func.__proto__); // Function
console.dir(func.__proto__.__proto__); // Object
console.dir(func.__proto__.__proto__.__proto__); // null

const str1 = "fur-type";
const str2 = "type";

const propName = "jump--height";

const cat = {
  name: "felix",
  "fur-type": "long and sooo fluffy",
  "date.of.adoption": "01/01/2024",
  [propName]: "2mt",
  ancestors: { dad: "crumble", mom: "daisy" }
};

console.log(cat);

console.log(cat["fur-type"]); // "long and sooo fluffy"
// console.log(cat.fur - type); // "long and sooo fluffy"

// console.log(cat.date.of.adoption) // cat {date: {of: {adoption: undefined}}}
console.log(cat["date.of.adoption"]); // "01/01/2024"

// oltre a darci la possibilità di accedere a proprietà di oggetto con caratteri speciali, la square bracket notation []
//  ci permette anche di computare un valore (dinamico) prima di utilizzarlo nella ricerca della poprietà sull'oggetto

console.log(cat[str1]); // cat["fur-type"]
// in questo caso non c'è uno step di interpretazione della variabile o valore dinamico, quindi andremo a cercare direttamente una proprietà chiamata str1
console.log(cat.str1); // undefined
// in questo caso mi permettono di valutare il risultato dell'utilizzo di un metodo
console.log(cat["fur-".concat(str2)]); // cat["fur-type"]
// in questo caso mi permettono di valutare un'espressione
console.log(cat["fur" + "-" + str2]); // cat["fur-type"]

// rimozione di una proprietà esistente con la keyword delete

delete cat["date.of.adoption"];

cat.eyeColor = "green and gray";

console.log(cat);

// metodi avanzati di scomposizione di un oggetto nelle sue entità sottostanti (chiave-valore)
const catKeys = Object.keys(cat); // ["fur-type","date.of.adoption", ... ]
console.log(catKeys);
const catValues = Object.values(cat); // ["long and sooo fluffy", "2mt", ... ]
console.log(catValues);
const catEntries = Object.entries(cat); // [ ["fur-type", "long and sooo fluffy"], ["jump--height", "2mt"], ... ]
console.log(catEntries);

for (const pair of catEntries) {
  const [first, second] = pair;

  console.log("first", first);
  console.log("second", second);
}

// for (const [first, second] of catEntries) {
//   console.log("first", first);
//   console.log("second", second);
// }

const arrOfObj = [];

for (const [key, content] of catEntries) {
  //   console.log("key", key);
  //   console.log("content", content);

  const newObj = {
    [key]: content
  };
  //   console.log(newObj);
  arrOfObj.push(newObj);
}

console.log(arrOfObj);

// le primitive si comportano come ci aspetteremmo, verrebbero copiate direttamente senza problemi
let x = 10;
let y = x;

y = y * 2; // questo passaggio non ha avuto NESSUN effetto su x
// questo perché il passaggio a linea 137 ha COPIATO effettivamente il valore CONTENUTO in x, non ha copiato x stesso
console.log("x", x);
console.log("y", y);

// const cat2 = cat; // DA NON FARE MAI QUANDO SI CERCA DI CLONARE UN OGGETTO! *** L'oggetto NON SI E' CLONATO!***
// (questo passaggio ha semplicemente creato una nuova etichetta per la stessa entità in memoria che è l'oggetto cat)

// crea una SHALLOW COPY (copia superficiale di primo livello)
const cat2 = Object.assign({}, cat);
// console.log(cat["fur-type"]);

// delete cat2["fur-type"];

// console.log(cat["fur-type"]);

cat2.name = "garfield";

cat2.ancestors = Object.assign({}, cat.ancestors);

cat2.ancestors.dad = "speedy";

// structuredClone crea un vero e proprio clone anche delle sotto referenze
const cat3 = structuredClone(cat);
// a questo punto possiamo modificare sia le proprietà di primo livello che quelle di una referenza di secondo livello senza intaccare l'oggetto principale

cat3.name = "mittens";

cat3.ancestors.dad = "tigro";

console.log(cat);
console.log(cat2);
console.log(cat3);
