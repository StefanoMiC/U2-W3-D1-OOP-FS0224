// abbiamo visto che JS è un linguaggio di programmazione orientato agli oggetti
// la differenza principale, tuttavia, con altri linguaggi di programmazione più classici
// come Java, C#, C++ è che JS si basa sul concetto di PROTOTIPO, mentre gli altri si
// basano sul concetto di CLASSE

// grazie alle classi, gli altri linguaggi permettono di estendere le funzionalità
// di una struttura principale creando delle "sottovarianti", delle "sottoclassi"

// let obj = {}
// in JS è possibile creare un oggetto direttamente con le {} senza avere il costruttore,
// mentre in tutti i classici linguaggi OOP questo non è possibile: è necessario avere
// PRIMA la classe, e poi se ne deriva l'istanza (l'oggetto)

// negli altri linguaggi non è possibile modificare uno "stampino" dopo la sua creazione
// mentre in JS come abbiamo visto ieri è possibile agire sui prototipi

// con il passare del tempo e l'introduzione di ES6 anche JS ha cominciato a permettere
// a suoi sviluppatori di utilizzare il concetto di "classe", uniformando gli approcci
// con altri linguaggi più blasonati e rendendo più facile la transizione a sviluppatori
// provenienti da questi linguaggi.

// const Person = function () {
//     this.name = "";
//     this.surname = "";
//     this.address = "";
//     this.email = "";
//   };

class Person {
  constructor(_name, _surname, _age, _email) {
    this.name = _name;
    this.surname = _surname;
    this.age = _age;
    this.email = _email;
  }

  // i metodi delle classi si creano senza particolari keyword, ma come fossero delle definizioni di funzioni classiche
  showName() {
    return this.name + " " + this.surname;
  }
}

const valentinoRossi = new Person("Valentino", "Rossi", 45, "vale.rossi@gmail.com");

console.log(valentinoRossi);
console.log(valentinoRossi.showName());

class Developer extends Person {
  constructor(_name, _surname, _age, _email, _languages, _specialty) {
    // devo far arrivare le proprietà _name, _surname, _age, _email alla classe Person
    // Person è definita la SUPERCLASSE di Developer
    super(_name, _surname, _age, _email);
    this.languages = _languages;
    this.specialty = _specialty;
  }

  showFullDescription() {
    // super mi permette di chiamare metodi della super-classe (o istanza principale in questo caso)
    // andando a comporre un messaggio più specifico sulla base di quello precedente
    return super.showName() + ": expert in " + this.specialty;
  }
}

const stefanoDev = new Developer("Stefano", "Miceli", 34, "stefano.mic@gmail.com", ["HTML", "CSS", "JS", "React"], "React");
console.log(stefanoDev);

console.log(stefanoDev.showFullDescription());
