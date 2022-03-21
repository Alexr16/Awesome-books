import Library from './modules/library.js';
import Book from './modules/book.js';
import Store from './modules/store.js';
import { DateTime } from './modules/luxon.js';

const ADD_BTN = document.querySelector('.add-btn');
const contact = document.querySelector('.contact');
const contactLink = document.querySelector('.contact-link');
const listLink = document.querySelector('.list-link');
const addNewLink = document.querySelector('.add-new-link');
const booksList = document.querySelector('.book-list');
const newSection = document.querySelector('.add-new');
const link = document.querySelectorAll('.link');
const dateTime = document.getElementById('current-date');
let i = 0;

ADD_BTN.addEventListener('click', (e) => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const inputs = document.querySelectorAll('#title, #author');
  e.preventDefault();
  if (bookTitle === '' && bookAuthor === '') {
    Library.alert('Book cannot be empty', 'danger');
  } else {
    const newBook = new Book(i += 1, bookTitle, bookAuthor);
    Library.add(newBook);
    Store.add(newBook);
    Library.alert('Book Added', 'success');
    Store.updateId();
  }
  inputs.forEach((input) => {
    input.value = '';
  });
});

window.addEventListener('load', () => {
  Library.displayBook();
  Store.updateId();
});

listLink.addEventListener('click', () => {
  booksList.classList.remove('hide');
  contact.classList.add('hide');
  newSection.classList.add('hide');
});

addNewLink.addEventListener('click', () => {
  booksList.classList.add('hide');
  contact.classList.add('hide');
  newSection.classList.remove('hide');
});

contactLink.addEventListener('click', () => {
  booksList.classList.add('hide');
  contact.classList.remove('hide');
  newSection.classList.add('hide');
});

link.forEach((item) => item.addEventListener('click', () => {
  link.forEach((item) => item.classList.remove('active'));
  item.classList.add('active');
}));

const dt = DateTime.now();
dateTime.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);