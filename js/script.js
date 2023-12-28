import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateBMI, notANumber } from './utils.js'

// variables
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const input = document.querySelector("form input")

// creating and assigning a function to an event
form.onsubmit = (e) => {
  e.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateBMI(weight, height)
  displayResultMessage(result)
};

function displayResultMessage(result) {
  const message = `Your BMI is ${result}`

  Modal.message.innerText = message
  Modal.open()
}

input.oninput = () => AlertError.close()