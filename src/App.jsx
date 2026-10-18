import { useEffect, useState } from 'react'
import AssignmentCard from './components/AssignmentCard.jsx'
import ProfileCardDemo from './components/ProfileCardDemo.jsx'
import './App.css'

const assignments = [
  { number: 1, title: 'JavaScript Calculator', description: 'Use functions and switch or if-else logic to perform basic arithmetic.', technology: 'HTML · CSS · JS', href: `${import.meta.env.BASE_URL}assignment-1-calculator/index.html` },
  { number: 2, title: 'DOM To-Do List', description: 'Create and manage tasks by working with the browser DOM.', technology: 'HTML · CSS · JS', href: `${import.meta.env.BASE_URL}assignment-2-todo-list/index.html` },
  { number: 3, title: 'Registration Form Validation', description: 'Build a registration form and check user input with JavaScript.', technology: 'HTML · CSS · JS', href: `${import.meta.env.BASE_URL}assignment-3-registration-form/index.html` },
  { number: 4, title: 'React Profile Card', description: 'Pass profile details into a reusable React component with props.', technology: 'React · Props', href: `${import.meta.env.BASE_URL}#assignment-4-profile-cards` },
  { number: 5, title: 'Controlled React Form', description: 'Connect form fields to React state and respond to user input.', technology: 'React · useState' },
  { number: 6, title: 'React Counter App', description: 'Use React state to increment, decrement, and reset a counter.', technology: 'React · useState' },
]

function App() {
  const [notice, setNotice] = useState('')
  const [currentHash, setCurrentHash] = useState(window.location.hash)

  useEffect(() => {
    function updateViewFromHash() {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('hashchange', updateViewFromHash)
    return () => window.removeEventListener('hashchange', updateViewFromHash)
  }, [])

  if (currentHash === '#assignment-4-profile-cards') {
    return <ProfileCardDemo />
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href={import.meta.env.BASE_URL} aria-label="Web Development Lab Assignments home">
          <span className="brand__mark" aria-hidden="true">&lt;/&gt;</span>
          <span>Web Dev Lab</span>
        </a>
        <a className="header-link" href="#assignments">Explore labs <span aria-hidden="true">↓</span></a>
      </header>

      <main>
        <section className="hero" aria-labelledby="page-title">
          <p className="eyebrow">LEARN BY BUILDING</p>
          <h1 id="page-title">Web Development<br className="desktop-break" /> Lab Assignments</h1>
          <p className="hero__description">A hands-on path through the fundamentals of the web, from JavaScript and the DOM to React.</p>
          <a className="primary-link" href="#assignments">Browse the assignments <span aria-hidden="true">↓</span></a>
          <div className="hero__orbit hero__orbit--one" aria-hidden="true" />
          <div className="hero__orbit hero__orbit--two" aria-hidden="true" />
          <span className="hero__spark hero__spark--one" aria-hidden="true">✳</span>
          <span className="hero__spark hero__spark--two" aria-hidden="true">✦</span>
        </section>

        <section className="assignments-section" id="assignments" aria-labelledby="assignments-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR LEARNING PATH</p>
              <h2 id="assignments-title">Six labs. Lots to make.</h2>
            </div>
            <p className="section-heading__note">Start with the basics, then bring your ideas to life with React.</p>
          </div>
          <div className="assignment-grid">
            {assignments.map((assignment) => (
              <AssignmentCard key={assignment.number} {...assignment} onComingSoon={(title) => setNotice(`${title} is coming soon.`)} />
            ))}
          </div>
          <p className="coming-soon" role="status" aria-live="polite">{notice}</p>
        </section>
      </main>

      <footer className="site-footer">
        <span>Web Development Lab Assignments</span>
        <span>Built to learn, one lab at a time.</span>
      </footer>
    </div>
  )
}

export default App
