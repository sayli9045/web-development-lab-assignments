import { useState } from 'react'
import './ProfileCard.css'

function ProfileCard({ name, role, bio, skills, image }) {
  const [imageFailed, setImageFailed] = useState(false)
  const initials = name.split(/\s+/).map((part) => part.charAt(0)).join('').slice(0, 2)

  return (
    <article className="profile-card">
      <div className="profile-card__portrait">
        {image && !imageFailed ? (
          <img
            className="profile-card__image"
            src={image}
            alt={`Portrait of ${name}`}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="profile-card__fallback" role="img" aria-label={`${name}'s initials: ${initials}`}>
            {initials}
          </span>
        )}
      </div>
      <h2 className="profile-card__name">{name}</h2>
      <p className="profile-card__role">{role}</p>
      <p className="profile-card__bio">{bio}</p>
      <h3 className="profile-card__skills-title" id="profile-skills-title">Skills</h3>
      <ul className="profile-card__skills" aria-label={`${name}'s skills`}>
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </article>
  )
}

export default ProfileCard
