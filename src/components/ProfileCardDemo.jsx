import ProfileCard from './ProfileCard.jsx'
import './ProfileCardDemo.css'

// Each profile is plain data. The same ProfileCard component receives each one as props.
const profiles = [
  {
    name: 'Maya Patel',
    role: 'Frontend Developer',
    bio: 'Maya enjoys turning thoughtful designs into clear, welcoming web experiences.',
    skills: ['HTML', 'CSS', 'React'],
  },
  {
    name: 'Jordan Lee',
    role: 'UI Designer',
    bio: 'Jordan focuses on accessible interfaces and practical design systems.',
    skills: ['Figma', 'Accessibility', 'Prototyping'],
  },
  {
    name: 'Alex Morgan',
    role: 'JavaScript Learner',
    bio: 'Alex likes solving small problems and learning how interactive pages work.',
    skills: ['JavaScript', 'DOM', 'Git'],
  },
]

function ProfileCardDemo() {
  return (
    <main className="profile-demo">
      <header className="profile-demo__header">
        <div>
          <p className="eyebrow">ASSIGNMENT 04 · REACT PROPS</p>
          <h1>React Profile Cards</h1>
          <p className="profile-demo__intro">One reusable component, three different sets of profile data.</p>
        </div>
        <a className="profile-demo__back" href={import.meta.env.BASE_URL}>← Back to assignments</a>
      </header>

      <section className="profile-demo__grid" aria-label="Sample learner profiles">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} {...profile} />
        ))}
      </section>
    </main>
  )
}

export default ProfileCardDemo
