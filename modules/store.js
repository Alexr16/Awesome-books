export default class Store {
  static getBook() {
    let books = [];
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static add(book) {
    const BOOKS = Store.getBook();
    BOOKS.push(book);
    localStorage.setItem('books', JSON.stringify(BOOKS));
  }

  static remove(id) {
    const BOOKS = Store.getBook();
    BOOKS.forEach((book) => {
      if (book.id === id) {
        BOOKS.splice(id - 1, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(BOOKS));
    this.updateId();
  }

  static updateId() {
    const BOOKS = Store.getBook();
    let i = 0;
    for (let j = 0; j < BOOKS.length; j += 1) {
      i += 1;
      BOOKS[j].id = i;
    }
    localStorage.setItem('books', JSON.stringify(BOOKS));
  }
}
