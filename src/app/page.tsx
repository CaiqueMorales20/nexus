import { Advantages } from '@/components/advantages'
import { getCategories } from '@/utils/get-categories'
import { getProducts } from '@/utils/get-products'

import { BestSellers } from './(home)/best-sellers'
import { CategoryCarousel } from './(home)/category-carousel'
import { Hero } from './(home)/hero'
import { LatestPosts } from './(home)/latest-posts'
import { Pitch } from './(home)/pitch'
import { Testimonials } from './(home)/testimonials'

export default async function Home() {
  const products = await getProducts()
  const categories = await getCategories()

  return (
    <main className="">
      <Hero />
      <CategoryCarousel categories={categories} />
      <BestSellers products={products} />
      <Pitch />
      <Testimonials />
      <LatestPosts />
      <Advantages />
    </main>
  )
}
