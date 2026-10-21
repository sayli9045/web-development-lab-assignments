import { useState } from 'react'
import { counterTransitions, hasReachedTen } from './counterTransitions.js'
import './CounterApp.css'

function CounterApp() {
  const [count, setCount] = useState(0)

  return (
    <main className="counter-page">
      <header className="counter-page__header">
        <div>
          <p className="counter-page__eyebrow">ASSIGNMENT 06 · REACT STATE</p>
          <h1>Assignment 6: React Counter App</h1>
          <p className="counter-page__intro">
            <code>useState</code> stores the current count. When a button updates state, React renders the new value.
          </p>
        </div>
        <a className="counter-page__back" href={import.meta.env.BASE_URL}>← Back to assignments</a>
      </header>

      <section className="counter-card" aria-labelledby="counter-card-title">
        <h2 id="counter-card-title">Your counter</h2>
        <output className="counter-card__value" aria-label={`Current count: ${count}`} aria-live="polite">
          {count}
        </output>
        {hasReachedTen(count) && (
          <p className="counter-card__milestone" role="status">Great work! You reached 10.</p>
        )}

        <div className="counter-card__controls" aria-label="Counter controls">
          <button className="counter-button counter-button--primary" type="button" onClick={() => setCount(counterTransitions.increment)}>
            Increment (+1)
          </button>
          <button className="counter-button counter-button--secondary" type="button" onClick={() => setCount(counterTransitions.decrement)} disabled={count === 0}>
            Decrement (-1)
          </button>
          <button className="counter-button counter-button--secondary" type="button" onClick={() => setCount(counterTransitions.reset)}>
            Reset
          </button>
          <button className="counter-button counter-button--accent" type="button" onClick={() => setCount(counterTransitions.setToTen)}>
            Set to 10
          </button>
        </div>
      </section>
    </main>
  )
}

export default CounterApp
