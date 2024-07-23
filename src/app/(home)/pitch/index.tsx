import { Button } from '@/components/ui/button'

export function Pitch() {
  return (
    <section className="container mt-20 grid gap-8 md:mt-40 md:grid-cols-2">
      <div className="my-auto">
        <h3 className="mb-4 text-2xl font-bold md:text-4xl">
          Elevate Your Tech Experience
        </h3>
        <p className="mb-4 text-sm md:mb-6 md:text-base">
          Explore top-notch notebooks, headphones, and more. Elevate your tech
          game with products designed for excellence and style.
        </p>
        <Button size={'lg'}>Buy now</Button>
      </div>
      <div className="aspect-square w-full rounded-md bg-muted"></div>
    </section>
  )
}
