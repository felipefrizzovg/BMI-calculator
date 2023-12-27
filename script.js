// variables
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const modalWrapper = document.querySelector(".modal-wrapper");
const modalTitle = document.querySelector(".modal .title span");
const modalBtnClose = document.querySelector(".close");

// creating and assigning a function to an event
form.onsubmit = (e) => {
  e.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = BMI(weight, height)
  const message = `Your BMI is ${result}`

  modalTitle.innerText = message
  modalWrapper.classList.add("open")
};

modalBtnClose.onclick = () => {
  modalWrapper.classList.remove("open")
}

function BMI(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}
