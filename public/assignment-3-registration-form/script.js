// Find the form fields and their message areas so validation can update the page.
const registrationForm = document.querySelector('#registration-form')
const fullNameInput = document.querySelector('#full-name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const confirmPasswordInput = document.querySelector('#confirm-password')
const successMessage = document.querySelector('#success-message')

const fields = [fullNameInput, emailInput, passwordInput, confirmPasswordInput]

// Each field has a matching message element, which keeps errors next to their inputs.
function showFieldError(input, message) {
  const errorMessage = document.querySelector(`#${input.id}-error`)
  errorMessage.textContent = message
  input.setAttribute('aria-invalid', message ? 'true' : 'false')
}

// Check one field at a time and return true only when that field is valid.
function validateField(input) {
  const value = input.value.trim()

  if (value === '') {
    showFieldError(input, 'This field is required.')
    return false
  }

  if (input === emailInput) {
    // This simple pattern checks for text on both sides of @ and a domain suffix.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(value)) {
      showFieldError(input, 'Enter a valid email address, such as name@example.com.')
      return false
    }
  }

  if (input === passwordInput) {
    // A strong password for this exercise needs length, uppercase, lowercase, and a digit.
    const passwordIsStrong = value.length >= 8
      && /[A-Z]/.test(value)
      && /[a-z]/.test(value)
      && /\d/.test(value)
    if (!passwordIsStrong) {
      showFieldError(input, 'Use at least 8 characters, including uppercase, lowercase, and a number.')
      return false
    }
  }

  if (input === confirmPasswordInput && input.value !== passwordInput.value) {
    showFieldError(input, 'The passwords do not match.')
    return false
  }

  showFieldError(input, '')
  return true
}

// Prevent a page reload and show success only after every field passes validation.
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault()
  successMessage.hidden = true

  const formIsValid = fields.map(validateField).every(Boolean)
  if (formIsValid) {
    successMessage.hidden = false
  }
})

// Recheck a field as the user edits it, and clear stale success or mismatch messages.
fields.forEach((input) => {
  input.addEventListener('input', () => {
    successMessage.hidden = true

    const hasError = input.getAttribute('aria-invalid') === 'true'
    if (hasError) validateField(input)

    if (input === passwordInput && confirmPasswordInput.value !== '') {
      validateField(confirmPasswordInput)
    }
  })
})
