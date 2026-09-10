import Playground from '../components/Playground'
import PageHeader from '../components/PageHeader'
import FinalCTA from '../components/FinalCTA'

const PlaygroundPage = () => (
  <>
    <PageHeader
      badge="Our Playground"
      title="Let Them Play, Explore & Imagine"
      subtitle="A thoughtfully designed play space where every corner sparks joy and adventure."
      image="/images/hero_playground_page.jpg"
    />
    <Playground hideHeading />
    <FinalCTA />
  </>
)

export default PlaygroundPage
