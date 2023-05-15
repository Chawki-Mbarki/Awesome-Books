import Book from './modules/classes/books.mjs';
import grabbingBooks from './modules/functions/grabbingBooks.mjs';
import displayBook from './modules/functions/displayBook.mjs';
import displayAllBooks from './modules/functions/displayAllBooks.mjs';
import isValid from './modules/functions/isValid.mjs';
import displaySection from './modules/functions/displaySection.mjs';
import addRemoveEvent from './modules/functions/addRemoveEvent.mjs';

const navLinks = document.querySelectorAll('.nav-link');
const books = grabbingBooks();
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBtn = document.getElementById('add');
/* const currentDate = document.querySelector('#current_date'); */

displaySection(1);
displayAllBooks(books);
addRemoveEvent(books);
isValid();

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => displaySection(index + 1));
});
titleInput.addEventListener('keyup', () => isValid());
authorInput.addEventListener('keyup', () => isValid());
addBtn.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const newBook = new Book(title, author);

  books.add(newBook);
  displayBook(newBook);
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  isValid();
  addRemoveEvent(books);
});
