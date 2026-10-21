import { useState } from 'react'
import './ControlledForm.css'

const initialValues = {
  fullName: '',
  email: '',
  course: '',
}

function getFieldError(fieldName, value) {
  if (value.trim() === '') {
    if (fieldName === 'course') return 'Please select a course.'
    if (fieldName === 'email') return 'Please enter your email address.'
    return 'Please enter your full name.'
  }

  if (fieldName === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
    return 'Enter a valid email address, such as name@example.com.'
  }

  return ''
}

function ControlledForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submittedValues, setSubmittedValues] = useState(null)

  // Controlled inputs read their current value from React state and update it on every change.
  function handleChange(event) {
    const { name, value } = event.target
    setValues((currentValues) => ({ ...currentValues, [name]: value }))
    setErrors((currentErrors) => {
      // Once a field has an error, keep showing it until its value is actually valid.
      if (!currentErrors[name]) return currentErrors
      return { ...currentErrors, [name]: getFieldError(name, value) }
    })
    setSubmittedValues(null)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = {}
    for (const fieldName of Object.keys(values)) {
      const error = getFieldError(fieldName, values[fieldName])
      if (error) nextErrors[fieldName] = error
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmittedValues(null)
      return
    }

    // This practice form displays the valid values locally; it does not send them to a server.
    setSubmittedValues({
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      course: values.course,
    })
  }

  function handleReset() {
    setValues(initialValues)
    setErrors({})
    setSubmittedValues(null)
  }

  return (
    <main className="controlled-form-page">
      <header className="controlled-form-page__header">
        <div>
          <p className="controlled-form-page__eyebrow">ASSIGNMENT 05 · REACT STATE</p>
          <h1>Assignment 5: React Controlled Form</h1>
          <p className="controlled-form-page__intro">
            See how controlled components use <code>useState</code> to manage field values and validation.
          </p>
        </div>
        <a className="controlled-form-page__back" href={import.meta.env.BASE_URL}>← Back to assignments</a>
      </header>

      <section className="controlled-form-card" aria-labelledby="controlled-form-heading">
        <h2 id="controlled-form-heading">Course registration</h2>
        <p className="controlled-form-card__note">All fields are required. Your information stays in this page.</p>

        <form className="controlled-form" onSubmit={handleSubmit} noValidate>
          <div className="controlled-form__field">
            <label htmlFor="controlled-full-name">Full Name</label>
            <input
              id="controlled-full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              value={values.fullName}
              onChange={handleChange}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby="controlled-full-name-error"
            />
            <p className="controlled-form__error" id="controlled-full-name-error" aria-live="polite">{errors.fullName}</p>
          </div>

          <div className="controlled-form__field">
            <label htmlFor="controlled-email">Email Address</label>
            <input
              id="controlled-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby="controlled-email-error"
            />
            <p className="controlled-form__error" id="controlled-email-error" aria-live="polite">{errors.email}</p>
          </div>

          <div className="controlled-form__field">
            <label htmlFor="controlled-course">Course</label>
            <select
              id="controlled-course"
              name="course"
              value={values.course}
              onChange={handleChange}
              aria-invalid={Boolean(errors.course)}
              aria-describedby="controlled-course-error"
            >
              <option value="">Select a course</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Database Systems">Database Systems</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
            <p className="controlled-form__error" id="controlled-course-error" aria-live="polite">{errors.course}</p>
          </div>

          <div className="controlled-form__actions">
            <button className="controlled-form__submit" type="submit">Submit form</button>
            <button className="controlled-form__reset" type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>

        {submittedValues && (
          <section className="controlled-form-result" aria-labelledby="controlled-form-result-title" role="status" aria-live="polite">
            <h2 id="controlled-form-result-title">Submission successful</h2>
            <p>Your validated form values are shown below. Nothing was sent to a server.</p>
            <dl>
              <div><dt>Full Name</dt><dd>{submittedValues.fullName}</dd></div>
              <div><dt>Email Address</dt><dd>{submittedValues.email}</dd></div>
              <div><dt>Course</dt><dd>{submittedValues.course}</dd></div>
            </dl>
          </section>
        )}
      </section>
    </main>
  )
}

export default ControlledForm
