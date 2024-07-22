import { BestSellers } from './(home)/best-sellers'
import { CategoryCarousel } from './(home)/category-carousel'
import { Hero } from './(home)/hero'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <CategoryCarousel />
      <BestSellers />
    </main>
  )
}
