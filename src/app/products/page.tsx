import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { getCategories } from '@/utils/get-categories'
import { getProducts } from '@/utils/get-products'

import { Filters } from './filters'
import { Showcase } from './showcase'

export default async function Products() {
  const products = await getProducts()
  const categories = await getCategories()

  return (
    <main className="container min-h-screen">
      <Breadcrumb className="mt-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-showcase">
        <Filters categories={categories} />
        <Showcase products={products} />
      </div>
    </main>
  )
}
