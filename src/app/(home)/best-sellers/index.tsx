import { Product } from './product'

export function BestSellers() {
  return (
    <section className="container mt-40">
      <h2 className="mb-16 text-center text-2xl font-bold">Our Bestsellers</h2>
      <div className="grid grid-cols-4 gap-x-8 gap-y-14">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  )
}
