import Contact from '../components/Contact'
import PageHeader from '../components/PageHeader'

const ContactPage = () => (
  <>
    <PageHeader
      badge="Contact Us"
      title="Come Play With Us"
      subtitle="We'd love to welcome your family to Dreamy Play Cafe & Co."
      image="/images/hero_contact.jpg"
    />
    <Contact hideHeading />
  </>
)

export default ContactPage
