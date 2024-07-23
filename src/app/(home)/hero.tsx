import { ArrowRight } from 'lucide-react'

// import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="relative mx-auto w-[95vw] rounded-lg bg-muted">
      {/* <Image
        className="z-1 absolute inset-0 h-full w-full object-cover"
        src={'/home.png'}
        alt=""
        width={400}
        height={400}
      /> */}
      <div className="container relative z-10 mt-10 grid h-[855px] w-full grid-cols-2 gap-4">
        <div className="my-auto">
          <span className="mb-2 block text-base md:text-xl">
            Latest release
          </span>
          <h1 className="mb-2 text-5xl font-black md:text-7xl">
            Alienware M16
          </h1>
          <h2 className="text-sm uppercase italic md:text-base">
            Up to 20% discount
          </h2>
          <Button className="mt-6 gap-2 md:mt-12" size={'lg'}>
            Shop Now <ArrowRight className="w-4" />
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  )
}
