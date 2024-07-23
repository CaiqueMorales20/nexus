import { Product } from '@/components/product'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Pagination } from './pagination'

export function Showcase() {
  return (
    <section>
      <header className="mb:mb-16 mb-8 flex items-center justify-between gap-4">
        <span className="text-sm md:text-2xl">Showing 1-20 of 200 results</span>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Show by latest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="price">Price</SelectItem>
          </SelectContent>
        </Select>
      </header>
      <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <Pagination />
    </section>
  )
}
