import { ChevronLeft, ChevronRight } from 'lucide-react'

import { PaginationButton } from './pagination-button'

export function Pagination() {
  return (
    <div className="my-20 ml-auto flex w-max gap-2">
      <PaginationButton isActive>
        <ChevronLeft className="h-4 w-4" />
      </PaginationButton>
      <PaginationButton isActive>1</PaginationButton>
      <PaginationButton isActive>2</PaginationButton>
      <PaginationButton isActive>3</PaginationButton>
      <PaginationButton isActive>4</PaginationButton>
      <PaginationButton isActive>
        <ChevronRight className="h-4 w-4" />
      </PaginationButton>
    </div>
  )
}
