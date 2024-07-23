'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export function HeaderLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div>
      <Link
        className={twMerge(
          'hover:text-shadow text-foreground/90 duration-200',
          href === pathname ? 'font-bold' : 'hover:text-shadow-md',
        )}
        href={href}
      >
        {children}
      </Link>
    </div>
  )
}
