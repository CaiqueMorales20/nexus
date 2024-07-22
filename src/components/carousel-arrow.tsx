import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useSwiper } from 'swiper/react'
import { twMerge } from 'tailwind-merge'

function CarouselArrow({
  direction,
  isActive,
}: {
  direction: 'prev' | 'next'
  isActive: boolean
}) {
  const swiper = useSwiper()

  return (
    <button
      className={twMerge(
        'flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-foreground text-background',
        !isActive && 'bg-foreground/60',
      )}
      disabled={!isActive}
      onClick={
        direction === 'prev'
          ? () => swiper.slidePrev()
          : () => swiper.slideNext()
      }
    >
      {direction === 'prev' ? (
        <ArrowLeft className="h-4 w-4" />
      ) : (
        <ArrowRight className="h-4 w-4" />
      )}
    </button>
  )
}

export { CarouselArrow }
