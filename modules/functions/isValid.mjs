export default function isValid() {
  console.log("working")
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const btn = document.getElementById('add');

  const isValid = title && author;
  btn.classList.toggle('disabled', !isValid);
  btn.disabled = !isValid;
}
