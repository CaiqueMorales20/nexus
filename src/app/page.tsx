import { Advantages } from './(home)/advantages'
import { BestSellers } from './(home)/best-sellers'
import { CategoryCarousel } from './(home)/category-carousel'
import { Hero } from './(home)/hero'
import { LatestPosts } from './(home)/latest-posts'
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
      <LatestPosts />
      <Advantages />
    </main>
  )
}
