import LinkedList from "../classes/linkedList.mjs";

export default function grabbingBooks() {
  let books = JSON.parse(localStorage.getItem('books'));
  if (!books) {
    books = new LinkedList(null, null, 0);
  } else {
    books = new LinkedList(books.head, books.tail, books.size);
    const tail = books.tail;
    books.remove(books.size - 1);
    books.add(tail.value);
  }
  return books;
}
