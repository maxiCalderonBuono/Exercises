class Book {
  constructor(title,author,year,gender) {
    this.title= title;
    this.author= author;
    this.year= year;
    this.gender= gender;
  }

  bookInformation () {
    return `El libro ${this.title} perteneciente al género de ${this.gender}, fue escrito por ${this.author} en el año ${this.year}`
  }

  getAuthor () {
    return this.author;
  }

  getGender () {
    return this.gender;
  }
}

let books= []
while (books.length < 3) {
  let title = prompt(`Introduce el nombre del libro`) ;
  let author= prompt(`Introduce el nombre del autor`);
  let year= prompt(`Introduce el año de publicación`);
  let gender= prompt(`Introduce el género`).toLowerCase();

  if (title != "" && author != "" && !isNaN(year) && year.length == 4 && (gender == "fantasia" || gender == "terror" || gender == "aventura")) {
    books.push(new Book(title,author,year,gender));
  }
}

const showBooks = () => {
  console.log(books);
}
 const showAuthor = () => {
   let authors = [] ;
   for (const book of books) {
     authors.push(book.getAuthor());
   }
   console.log(authors.sort())
 }

 const showInformation = () => {
   gender= prompt(`Introduce un genero para la búsquedad`)

   for (const book of books) {
     if (book.getGender()==gender) {
     console.log(book.bookInformation());
   }
  }
 }

 showBooks();
 showAuthor();
 showInformation();

