import { BestSellers } from './(home)/best-sellers'
import { CategoryCarousel } from './(home)/category-carousel'
import { Hero } from './(home)/hero'
import { Pitch } from './(home)/pitch'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <CategoryCarousel />
      <BestSellers />
      <Pitch />
    </main>
  )
}
