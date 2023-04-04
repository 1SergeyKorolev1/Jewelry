const footerDate = document.querySelector(".footer-date");
const inputWork = document.querySelector(".input-work");
const inputProblem = document.querySelector(".input-problem");
const inputType = document.querySelector(".input-type");
const inputWeight = document.querySelector(".input-weight");
const inputMaterial = document.querySelector(".input-material");

function newData() {
  return new Date().getFullYear();
}

footerDate.textContent = `Sergey Korolev ${newData()}`;

function choiceWork(evt) {
  if (
    evt.target.value === "Виды работ" ||
    Number(evt.target.value) === 3 ||
    Number(evt.target.value) === 1
  ) {
    inputWeight.classList.add("input-disable");
    inputMaterial.classList.add("input-disable");
    inputMaterial.value = "Материал изделия";
    inputType.value = "Вид изделия";
  }

  if (Number(evt.target.value) === 1 || Number(evt.target.value) === 3) {
    inputProblem.classList.remove("input-disable");
  } else {
    inputProblem.classList.add("input-disable");
  }

  if (Number(evt.target.value) === 2) {
    inputType.classList.remove("input-disable");
  } else {
    inputType.classList.add("input-disable");
  }
}

function choiceProduct(evt) {
  if (
    Number(evt.target.value) === 1 ||
    Number(evt.target.value) === 2 ||
    Number(evt.target.value) === 3 ||
    Number(evt.target.value) === 4
  ) {
    inputWeight.classList.remove("input-disable");
    inputMaterial.classList.remove("input-disable");
  } else {
    inputWeight.classList.add("input-disable");
    inputMaterial.classList.add("input-disable");
  }
}

inputWork.addEventListener("input", choiceWork);
inputType.addEventListener("input", choiceProduct);
