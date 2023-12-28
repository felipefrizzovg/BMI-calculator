import { Modal } from './modal.js'

// variables
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// creating and assigning a function to an event
form.onsubmit = (e) => {
  e.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = BMI(weight, height)
  const message = `Your BMI is ${result}`

  Modal.message.innerText = message
  Modal.open()
};

function BMI(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}
