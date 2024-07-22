import { BestSellers } from './(home)/best-sellers'
import { CategoryCarousel } from './(home)/category-carousel'
import { Hero } from './(home)/hero'
import { Pitch } from './(home)/pitch'
import { Testimonials } from './(home)/testimonials'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <CategoryCarousel />
      <BestSellers />
      <Pitch />
      <Testimonials />
    </main>
  )
}
