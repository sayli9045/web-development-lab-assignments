import './AssignmentCard.css'

function AssignmentCard({ number, title, description, technology, onComingSoon }) {
  return (
    <article className="assignment-card">
      <div className="assignment-card__topline">
        <span className="assignment-card__number">Lab {String(number).padStart(2, '0')}</span>
        <span className="assignment-card__technology">{technology}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="assignment-card__action" type="button" onClick={() => onComingSoon(title)}>
        Open assignment <span aria-hidden="true">↗</span>
      </button>
    </article>
  )
}

export default AssignmentCard
