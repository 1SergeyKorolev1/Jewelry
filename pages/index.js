const footerDate = document.querySelector(".footer-date");
const inputWork = document.querySelector(".input-work");
const inputProblem = document.querySelector(".input-problem");
const inputProblemText = document.querySelector(".input-problem-text");
const inputType = document.querySelector(".input-type");
const inputWeight = document.querySelector(".input-weight");
const inputMaterial = document.querySelector(".input-material");
const inputItemDescription = document.querySelector(".input-item-description");
const inputFileRepair = document.querySelector(".input-file-repair");
const textDownloadFile = document.querySelector("text-download-file");
const inputFileExample = document.querySelector(".input-file-example");
const submitButton = document.querySelector(".submit-button");
// const elementCost = document.querySelector(".container-otvet").content;
// const productCost = document.querySelector(".productCost");
// const containerOtveta = document.querySelector(".elements");

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
    inputItemDescription.classList.add("input-disable");
    inputFileExample.classList.add("input-disable");
  }

  if (Number(evt.target.value) === 1 || Number(evt.target.value) === 3) {
    inputProblem.classList.remove("input-disable");
    inputFileRepair.classList.remove("input-disable");
  } else {
    inputProblem.classList.add("input-disable");
    inputFileRepair.classList.add("input-disable");
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
    inputFileExample.classList.remove("input-disable");
  } else {
    inputWeight.classList.add("input-disable");
    inputMaterial.classList.add("input-disable");
    inputFileExample.classList.add("input-disable");
  }

  if (Number(evt.target.value) === 5) {
    inputItemDescription.classList.remove("input-disable");
    inputWeight.classList.remove("input-disable");
    inputMaterial.classList.remove("input-disable");
    inputFileExample.classList.remove("input-disable");
  } else {
    inputItemDescription.classList.add("input-disable");
  }
}

function onClickSubmitButton(evt) {
  evt.preventDefault();
  // containerOtveta.prepend(createNameOtvet());
  console.log(inputWork.value);
  console.log(inputProblemText.value);
  console.log(textDownloadFile.files);
  alert("Калькулятор еще не работает...( Ведется разработка...");
}

inputWork.addEventListener("input", choiceWork);
inputType.addEventListener("input", choiceProduct);
submitButton.addEventListener("click", onClickSubmitButton);
