import { Product } from './product'

export function BestSellers() {
  return (
    <div className="container mt-32">
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
    </div>
  )
}
