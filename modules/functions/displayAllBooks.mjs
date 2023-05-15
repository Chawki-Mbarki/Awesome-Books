import displayBook from "./displayBook.mjs";

export default function displayAllBooks(books) {
  const booksContainer = document.querySelector('.books');
  booksContainer.innerHTML = '';
  let current = books.head;
  while (current) {
    displayBook(current.value)
    current = current.next;
  }
}
