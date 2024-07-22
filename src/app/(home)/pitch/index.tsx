import { Button } from '@/components/ui/button'

export function Pitch() {
  return (
    <section className="container mt-40 grid grid-cols-2 gap-8">
      <div className="my-auto">
        <h3 className="mb-4 text-4xl font-bold">
          Elevate Your Tech Experience
        </h3>
        <p className="mb-6">
          Explore top-notch notebooks, headphones, and more. Elevate your tech
          game with products designed for excellence and style.
        </p>
        <Button size={'lg'}>Buy now</Button>
      </div>
      <div className="aspect-square w-full rounded-md bg-muted"></div>
    </section>
  )
}
