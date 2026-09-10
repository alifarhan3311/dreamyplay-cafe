import About from '../components/About'
import PageHeader from '../components/PageHeader'
import FinalCTA from '../components/FinalCTA'

const AboutPage = () => (
  <>
    <PageHeader
      badge="About Us"
      title="Play. Explore. Celebrate."
      subtitle="Learn more about Dreamy Play Cafe & Co and what makes us a favourite for Brantford families."
      image="/images/hero_about.jpg"
    />
    <About hideHeading />
    <FinalCTA />
  </>
)

export default AboutPage
