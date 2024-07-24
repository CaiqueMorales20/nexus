'use client'

import 'swiper/css'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CarouselArrow } from '@/components/carousel-arrow'
import { Button } from '@/components/ui/button'

export function CategoryCarousel({ categories }: { categories: string[] }) {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  return (
    <section className="container mt-20 md:mt-40">
      <div className="w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
          }}
        >
          <div
            slot="container-start"
            className="mb-10 flex items-center justify-between"
          >
            <h2 className="text-xl font-bold md:text-2xl">
              Shop by categories
            </h2>
            {categories.length > 4 && (
              <div className="flex items-center justify-between gap-2">
                <CarouselArrow isActive={!isBeginning} direction="prev" />
                <CarouselArrow isActive={!isEnd} direction="next" />
              </div>
            )}
          </div>
          {categories.map((category, i) => (
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
                  className="invisible mx-auto mb-6 mt-auto w-[90%] capitalize duration-200 group-hover:visible"
                  size={'lg'}
                >
                  {category}
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
