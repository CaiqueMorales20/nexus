import { Product as ProductType } from '@/@types/product'
import { Product } from '@/components/product'

export function BestSellers({ products }: { products: ProductType[] }) {
  return (
    <section className="container mt-20 md:mt-40">
      <h2 className="mb-16 text-center text-2xl font-bold">Our Bestsellers</h2>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
