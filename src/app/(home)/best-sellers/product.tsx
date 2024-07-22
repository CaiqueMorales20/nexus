// import Image from 'next/image'

import { Heart } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Product() {
  return (
    <div className="w-full">
      {/* <Image
        src={'/shirt.png'}
        className="mb-6 w-full object-cover"
        alt=""
        width={259}
        height={326}
      /> */}
      <div className="group relative mb-6 flex h-[415px] w-full bg-muted hover:bg-muted/80">
        {/* Hover items */}
        <div className="invisible absolute inset-0 grid flex-1 group-hover:visible">
          <button className="mr-[5%] mt-6 flex h-8 w-8 items-center justify-center justify-self-end rounded-full bg-foreground">
            <Heart className="h-4 w-4 text-background" />
          </button>
          <Button className="mx-auto mb-6 w-[90%] self-end" size={'lg'}>
            Noteboooks
          </Button>
        </div>
      </div>
      <div>
        <h3 className="mb-1 font-bold">Roadstar</h3>
        <p className="mb-1">Printed Cotton T-shirt</p>
        <span className="flex gap-2">
          <span>$38.00</span>
          <span className="text-gray-400 line-through">$40.00</span>
        </span>
      </div>
    </div>
  )
}
