import removeBook from "./removeBook.mjs";

export default function addRemoveEvent(books) {
  const removeBtns = document.querySelectorAll(".remove-book");
  removeBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      removeBook(books, index);
    });
  });
}
