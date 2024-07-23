import React from 'react'
import { twMerge } from 'tailwind-merge'

export function PaginationButton({
  isActive,
  children,
}: {
  isActive: boolean
  children: React.ReactNode
}) {
  return (
    <button
      className={twMerge(
        'flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-foreground text-sm text-background md:h-10 md:w-10 md:text-base',
        !isActive && 'bg-foreground/60',
      )}
      disabled={!isActive}
    >
      {children}
    </button>
  )
}
