import { Heart } from 'lucide-react'
import Image from 'next/image'

import { Advantages } from '@/components/advantages'
import { Product } from '@/components/product'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatCurrency } from '@/utils/format-currency'
import { getProduct } from '@/utils/get-product'
import { getProducts } from '@/utils/get-products'

export default async function Products({
  params: { id },
}: {
  params: { id: string }
}) {
  const product = await getProduct(id)
  const products = await getProducts()

  return (
    <main className="container min-h-screen">
      <Breadcrumb className="mb-20 mt-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="flex aspect-square items-center justify-center bg-muted">
          <Image
            className="h-auto w-[80%]"
            src={product.imageURL}
            alt={product.name}
            width={500}
            height={600}
          />
        </div>
        <div className="my-auto">
          <h1 className="mb-4 text-3xl font-black">{product.name}</h1>
          <span className="mb-6 block text-xl font-bold">
            {formatCurrency(product.price)}
          </span>
          <p className="mb-10 text-justify text-foreground/70">
            {product.description}
          </p>

          <div className="flex items-center gap-4">
            <Button size={'lg'}>Add to cart</Button>
            <button className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-primary hover:bg-primary">
              <Heart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      <Separator className="my-20 md:container md:my-40" />

      <section>
        <h2 className="mb-16 text-2xl font-bold">Related products</h2>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Advantages />
    </main>
  )
}
