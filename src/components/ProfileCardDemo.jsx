import ProfileCard from './ProfileCard.jsx'
import './ProfileCardDemo.css'

// These profile details are passed to the reusable ProfileCard component as props.
const profile = {
  name: 'Sayli Haidrabade',
  role: 'Full Stack Developer',
  bio: 'MCA student passionate about building web applications and learning new technologies.',
  skills: ['Java', 'Spring Boot', 'React', 'Python', 'MySQL'],
  image: `${import.meta.env.BASE_URL}images/my-profile.jpg`,
}

function ProfileCardDemo() {
  return (
    <main className="profile-demo">
      <header className="profile-demo__header">
        <a className="profile-demo__back" href={import.meta.env.BASE_URL}>← Back to assignments</a>
      </header>

      <section className="profile-demo__stage" aria-labelledby="profile-demo-title">
        <h1 className="visually-hidden" id="profile-demo-title">Assignment 4: React Profile Card</h1>
        <ProfileCard {...profile} />
      </section>
    </main>
  )
}

export default ProfileCardDemo
