// Keep each arithmetic operation in its own function so the steps are easy to follow.
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber
}

const calculatorForm = document.querySelector('#calculator-form')
const firstNumberInput = document.querySelector('#first-number')
const secondNumberInput = document.querySelector('#second-number')
const operationInput = document.querySelector('#operation')
const resultDisplay = document.querySelector('#result')

function showMessage(message, isError = false) {
  resultDisplay.textContent = message
  resultDisplay.classList.toggle('is-error', isError)
}

calculatorForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const firstValue = firstNumberInput.value.trim()
  const secondValue = secondNumberInput.value.trim()

  // A number input can report badInput when the typed value is not a valid number.
  if (firstNumberInput.validity.badInput || secondNumberInput.validity.badInput) {
    showMessage('Please enter valid numbers in both fields.', true)
    return
  }

  // Check for missing values before converting, because Number('') would become zero.
  if (firstValue === '' || secondValue === '') {
    showMessage('Please enter both numbers before calculating.', true)
    return
  }

  const firstNumber = Number(firstValue)
  const secondNumber = Number(secondValue)

  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    showMessage('Please enter valid, finite numbers in both fields.', true)
    return
  }

  let result

  // The switch selects the matching operation function.
  switch (operationInput.value) {
    case 'add':
      result = add(firstNumber, secondNumber)
      break
    case 'subtract':
      result = subtract(firstNumber, secondNumber)
      break
    case 'multiply':
      result = multiply(firstNumber, secondNumber)
      break
    case 'divide':
      if (secondNumber === 0) {
        showMessage('Cannot divide by zero. Please choose a non-zero second number.', true)
        return
      }
      result = divide(firstNumber, secondNumber)
      break
    default:
      showMessage('Please choose a valid operation.', true)
      return
  }

  if (!Number.isFinite(result)) {
    showMessage('The result is outside the range of supported numbers.', true)
    return
  }

  showMessage(`Result: ${result}`)
})
