import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="mx-auto w-[95vw] rounded-lg bg-muted">
      <div className="container mt-10 grid h-[855px] w-full grid-cols-2 gap-4">
        <div className="my-auto">
          <span className="mb-2 block text-xl">Latest release</span>
          <h1 className="mb-2 text-7xl font-black">Alienware M16</h1>
          <h2 className="uppercase italic">Up to 20% discount</h2>
          <Button className="mt-12 gap-2" size={'lg'}>
            Shop Now <ArrowRight className="w-4" />
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  )
}
