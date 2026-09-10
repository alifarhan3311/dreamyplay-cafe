import Gallery from '../components/Gallery'
import PageHeader from '../components/PageHeader'
import FinalCTA from '../components/FinalCTA'

const GalleryPage = () => (
  <>
    <PageHeader
      badge="Gallery"
      title="Inside Dreamy Play Cafe"
      subtitle="Take a peek inside our play space and see what makes it special."
      image="/images/hero_gallery.jpg"
    />
    <Gallery hideHeading />
    <FinalCTA />
  </>
)

export default GalleryPage
