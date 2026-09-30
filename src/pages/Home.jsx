import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import ShortCard from '../components/home/ShortCard'
import HomeProductCard from '../components/home/HomeProductCard'
import HomeBannerCard from '../components/home/HomeBannerCard'
import CategoryCard from '../components/home/CategoryCard'
import Testimonials from '../components/common/Testimonials'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl space-y-14 px-4 pt-6">
      <Helmet>
        <title>Shoppix Grocery – Fresh Groceries Delivered</title>
        <meta
          name="description"
          content="Fresh fruits, vegetables, dairy and more delivered to your doorstep."
        />
      </Helmet>
      <Hero/>
      <CategoryCard/>
      <ShortCard/>
      <HomeProductCard/>
      <HomeBannerCard />
      <Testimonials/>
    </div>
  )
}
