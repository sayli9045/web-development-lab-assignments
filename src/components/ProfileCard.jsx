import './ProfileCard.css'

function ProfileCard({ name, role, bio, skills }) {
  return (
    <article className="profile-card">
      <div className="profile-card__avatar" aria-hidden="true">{name.charAt(0)}</div>
      <h2 className="profile-card__name">{name}</h2>
      <p className="profile-card__role">{role}</p>
      <p className="profile-card__bio">{bio}</p>
      <h3 className="profile-card__skills-title">Skills</h3>
      <ul className="profile-card__skills" aria-label={`${name}'s skills`}>
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </article>
  )
}

export default ProfileCard
