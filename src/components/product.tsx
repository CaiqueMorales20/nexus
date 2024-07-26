import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Product as ProductType } from '@/@types/product'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/utils/format-currency'

export function Product({ product }: { product: ProductType }) {
  return (
    <Link href={`/products/${product.id}`} className="w-full">
      <div className="group relative mb-6 flex h-[400px] w-full bg-muted">
        <Image
          src={product.imageURL}
          className="abosulute z-1 inset-0 m-auto aspect-square w-[80%] object-contain"
          alt=""
          width={259}
          height={326}
        />
        {/* Hover items */}
        <div className="invisible absolute inset-0 z-20 grid flex-1 bg-muted/40 group-hover:visible">
          <button className="mr-[5%] mt-6 flex h-8 w-8 items-center justify-center justify-self-end rounded-full bg-foreground">
            <Heart className="h-4 w-4 text-background" />
          </button>
          <Button className="mx-auto mb-6 w-[90%] self-end" size={'lg'}>
            Buy now
          </Button>
        </div>
      </div>
      <div>
        <h3 className="mb-1 font-bold">{product.name}</h3>
        <p className="mb-2 text-justify text-foreground/70">
          {product.description?.substring(0, 100).concat('...')}
        </p>
        <span className="flex gap-2">
          <span>{formatCurrency(product.price)}</span>
          {/* <span className="text-gray-400 line-through">$40.00</span> */}
        </span>
      </div>
    </Link>
  )
}
