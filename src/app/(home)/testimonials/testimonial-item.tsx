import { Star } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function TestimonialItem() {
  return (
    <div className="rounded-md bg-background/40 p-6">
      <div className="mb-6 flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="" fill="#fff" />
        ))}
      </div>
      <p className="mb-4 text-sm md:mb-6 md:text-base">
        Nexus transformed my tech experience! The notebooks are powerful, and
        the headphones are top-notch. Quick shipping and excellent customer
        service. Highly recommended!
      </p>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h5 className="text-xs font-bold md:text-sm">Leslie Alexander</h5>
          <h6 className="text-xs md:text-sm">Model</h6>
        </div>
      </div>
    </div>
  )
}
