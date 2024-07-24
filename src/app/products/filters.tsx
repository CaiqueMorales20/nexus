import { Checkbox } from '@/components/ui/checkbox'

export function Filters({ categories }: { categories: string[] }) {
  return (
    <div className="hidden md:block">
      <h2 className="mb-10 text-2xl font-bold">Product categories</h2>
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox className="" id={category} />
            <label
              htmlFor={category}
              className="select-none capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
