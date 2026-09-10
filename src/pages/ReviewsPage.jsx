import Reviews from '../components/Reviews'
import PageHeader from '../components/PageHeader'
import FinalCTA from '../components/FinalCTA'

const ReviewsPage = () => (
  <>
    <PageHeader
      badge="Reviews"
      title="Loved by Brantford Families"
      subtitle="See what families are saying about their experience at Dreamy Play Cafe & Co."
      image="/images/hero_reviews.jpg"
    />
    <Reviews hideHeading />
    <FinalCTA />
  </>
)

export default ReviewsPage
