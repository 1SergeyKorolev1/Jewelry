function newData() {
  return new Date().getFullYear();
}

console.log(newData());

const footerDate = document.querySelector(".footer-date");
footerDate.textContent = `Sergey Korolev ${newData()}`;
