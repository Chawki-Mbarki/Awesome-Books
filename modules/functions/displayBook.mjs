export default function displayBook(book) {
  const booksContainer = document.querySelector('.books');
  const newBook = `
        <li class="book flex">
          <div class="discription flex">
            <h3>"${book.title}"</h3>
            <span class="by">by</span>
            <p><strong>${book.author}</strong></p>
          </div>
          <button class="remove-book">Remove</button>
        </li>
        `;
  booksContainer.innerHTML += newBook;
}
