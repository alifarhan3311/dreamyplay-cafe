import BirthdayParties from '../components/BirthdayParties'
import PageHeader from '../components/PageHeader'

const BirthdayPage = () => (
  <>
    <PageHeader
      badge="Birthday Parties"
      title={'Make Their Birthday Extra Dreamy 🎂'}
      subtitle="From playtime to party time, we help families create a birthday celebration their little ones will remember."
      image="/images/hero_birthday.jpg"
    />
    <BirthdayParties hideHeading />
  </>
)

export default BirthdayPage
