'use client'

import 'swiper/css'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CarouselArrow } from '@/components/carousel-arrow'

import { TestimonialItem } from './testimonial-item'

export function Testimonials() {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  return (
    <section className="mt-40 w-full bg-muted">
      <div className="container py-20">
        <div className="w-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning)
              setIsEnd(swiper.isEnd)
            }}
          >
            <div
              slot="container-start"
              className="mb-10 flex items-center justify-between"
            >
              <h2 className="text-2xl font-bold">
                What our costumers say&apos;s
              </h2>
              <div className="flex items-center justify-between gap-2">
                <CarouselArrow isActive={!isBeginning} direction="prev" />
                <CarouselArrow isActive={!isEnd} direction="next" />
              </div>
            </div>
            {Array.from({ length: 6 }).map((_, i) => (
              <SwiperSlide key={i}>
                <TestimonialItem />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}