import displayAllBooks from "./displayAllBooks.mjs";
import addRemoveEvent from "./addRemoveEvent.mjs";

export default function removeBook(books, index){
  books.remove(index);
  displayAllBooks(books);
  addRemoveEvent(books);
}
