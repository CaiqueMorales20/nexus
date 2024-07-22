'use client'

import 'swiper/css'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/ui/button'

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

export function CategoryCarousel() {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  return (
    <section className="container mt-20">
      <div className="w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
          }}
        >
          <div
            slot="container-start"
            className="mb-10 flex items-center justify-between"
          >
            <h2 className="text-2xl font-bold">Shop by categories</h2>
            <div className="flex items-center justify-between gap-2">
              <CarouselArrow isActive={!isBeginning} direction="prev" />
              <CarouselArrow isActive={!isEnd} direction="next" />
            </div>
          </div>
          {Array.from({ length: 6 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="group relative flex h-[26rem] w-full justify-center bg-muted">
                {/* <Image
                  className="-z-1 absolute inset-0 h-full w-full"
                  src={'/category-1.png'}
                  alt=""
                  width={308}
                  height={422}
                /> */}
                <Button
                  className="invisible mx-auto mb-6 mt-auto w-[90%] duration-200 group-hover:visible"
                  size={'lg'}
                >
                  Noteboooks
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
