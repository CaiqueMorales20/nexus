import { Checkbox } from '@/components/ui/checkbox'

export function Filters() {
  return (
    <div className="hidden md:block">
      <h2 className="mb-10 text-2xl font-bold">Product categories</h2>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <Checkbox className="" id="notebook" />
            <label
              htmlFor="notebook"
              className="select-none leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Notebook
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
