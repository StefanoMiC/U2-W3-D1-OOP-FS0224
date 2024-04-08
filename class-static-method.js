// METODI e PROPRIETÀ STATICI nelle classi
// un metodo o una proprietà statici all'interno di una classe sono dei metodi
// e delle proprietà NON accessibili dalle ISTANZE della classe, ma solamente
// all'interno della classe stessa.

// anteponendo la keyword "static" rendiamo un metodo o una proprietà statici

class Article {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  isSameAuthor(articleToCompare) {
    // questo è il metodo normale che troviamo sulle istanze, l'istanza avrà già coscienza di quale sia il suo autore (this.author)
    // di conseguenza ci basta trovare il secondo autore da comparare attraverso il parametro articleToCompare
    return this.author === articleToCompare.author;
  }

  static isSameAuthorStatic(article1, article2) {
    // nel caso del metodo statico, si parte dal costruttore Article generico (non sa nulla riguardo all'istanza),
    // quindi avremo bisogno di entrambi i dati da comparare che verranno passati come parametro
    return article1.author === article2.author;
  }
}

const myArticle = new Article("L'importanza dei numeri primi", "Antonio Frascati");
// myArticle è un'ISTANZA di Article
const myArticle2 = new Article("CSS senza confini", "Josie Rumble");
const myArticle3 = new Article("L'importanza dei numeri secondi", "Antonio Frascati");

console.log(myArticle);

// il metodo non statico si propaga alle sue istanze, mentre quello statico no
// dovremo quindi ricercarlo sull'ISTANZA per poterlo utilizzare
console.log(myArticle.isSameAuthor(myArticle2));
console.log(myArticle.isSameAuthor(myArticle3));

// per trovare isSameAuthorStatic devo cercarlo all'interno della classe principale! NON nelle istanze
console.log(Article.isSameAuthorStatic(myArticle, myArticle2));
console.log(Article.isSameAuthorStatic(myArticle, myArticle3));
