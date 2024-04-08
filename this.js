const person = {
  name: "Mario",
  surname: "Rossi",
  abilities: ["parokour", "3mt jump", "iron man"],
  // il THIS nel contesto di un METODO creato con keyword "function", assume come valore l'istanza dell'oggetto proprietario di quel metodo
  sayHello: function () {
    console.log("THIS", this);
    console.log("Ciao mi chiamo " + this.name + " " + this.surname + "!");

    // una funzione normale definita dentro un metodo verrà generata ed eseguita in un'area separata rispetto al contesto dell'oggetto, perdendone ogni riferimento (che andrebbe eventualmente raccolto con un metodo .bind() )
    const innerFunc = function () {
      console.log("INNER THIS", this);
      console.log("INNER Name", this.surname);
    };
    // const innerFunc = function () {
    //   console.log("INNER THIS", this);
    //   console.log("INNER Name", this.surname);
    // }.bind(this);

    // .bind(this) - riassocia il valore de this interno a questa funzione usando il valore del this nel contesto più esterno

    innerFunc();

    // this.abilities.forEach(function (ability) {
    //   console.log("INNER THIS", this);
    //   console.log("Sono " + this.name + " " + this.surname + " e sono pratico in: " + ability);
    // });

    // le funzioni arrow a differenza di quelle classiche EREDITANO il valore del loro THIS dal contesto lessicale,
    // il contesto esterno a loro stesse relativamente a dove sono scritte

    // in questo caso la funzione arrow è più indicata perché eredita il valore del this dal contesto esterno
    // (in cui è già quello corretto, ovvero lo stesso valore del nostro oggetto person)
    this.abilities.forEach(ability => {
      console.log("INNER THIS", this);
      console.log("Sono " + this.name + " " + this.surname + " e sono pratico in: " + ability);
      setTimeout(() => {
        console.log("abilities", this.abilities);
      }, 1500);
    });
  }
};

person.sayHello();

const person2 = {
  name: "Giuseppe",
  surname: "Verdi",
  abilities: ["opera", "lyrics", "composition"],
  // le funzioni arrow NON dovrebbero essere usate per la creazione del metodo (ma solo internamente ad un metodo già creato)
  // questo perché il valore del this in questo caso si riferirebbe ad un contesto più esterno (all'oggetto globale)
  sayHello: () => {
    console.log("THIS", this);
    console.log("Ciao mi chiamo " + this.name + " " + this.surname + "!");
  }
};

person2.sayHello();

// RICORDARSI CHE:
// 1) conviene utilizzare una funzione con keyword "function" quando vogliamo creare un metodo sul primo livello
// 2) le funzioni interne a questo metodo conviene invece crearle con le funzioni arrow per ricavare il giusto valore del this (uguale all'oggetto di rifermento)
