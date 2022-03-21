import Store from './store.js';

export default class Library {
  static displayBook() {
    const BOOKS = Store.getBook();
    BOOKS.forEach((book) => Library.add(book));
  }

  static add(book) {
    const DIV = document.querySelector('.added-books');
    const BUTTON_ID = book.id;
    const BOOK_CONTAINER = document.createElement('div');
    BOOK_CONTAINER.classList.add('book');
    BOOK_CONTAINER.innerHTML = `
        <div class="book-item">
          <p class="item">"${book.title}" by ${book.author}</p>
          <button id="${BUTTON_ID}" class="remove-button delete" type="button">Remove</button>        
        </div>
      `;
    DIV.appendChild(BOOK_CONTAINER);
    document.querySelectorAll('.remove-button').forEach((n) => n.addEventListener('click', (e) => {
      Library.remove(e.target);
      Store.remove(book.id);
    }));
  }

  static remove(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }
  }

  static alert(message, className) {
    const DIV = document.createElement('div');
    DIV.className = `alert alert-${className}`;
    DIV.appendChild(document.createTextNode(message));
    const CONTAINER = document.querySelector('.container');
    const PAGE = document.querySelector('.add-new');
    CONTAINER.insertBefore(DIV, PAGE);
    setTimeout(() => document.querySelector('.alert').remove(), 1500);
  }
}