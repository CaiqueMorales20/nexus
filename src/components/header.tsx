import { Heart, Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'

export function Header() {
  return (
    <header className="container grid h-20 grid-cols-3 items-center">
      <Image
        className="h-auto w-32"
        src={'/logo.png'}
        alt=""
        width={1623}
        height={305}
      />
      <nav className="mx-auto flex gap-4">
        <Link
          className="text-foreground/90 hover:text-foreground/60 duration-200"
          href={''}
        >
          Home
        </Link>
        <Link
          className="text-foreground/90 hover:text-foreground/60 duration-200"
          href={''}
        >
          Shop
        </Link>
        <Link
          className="text-foreground/90 hover:text-foreground/60 duration-200"
          href={''}
        >
          Our Story
        </Link>
        <Link
          className="text-foreground/90 hover:text-foreground/60 duration-200"
          href={''}
        >
          Blog
        </Link>
        <Link
          className="text-foreground/90 hover:text-foreground/60 duration-200"
          href={''}
        >
          Contact Us
        </Link>
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <Search className="hover:text-foreground/60 h-5 w-5 cursor-pointer duration-200" />
        <Heart className="hover:text-foreground/60 h-5 w-5 cursor-pointer duration-200" />
        <ShoppingCart className="hover:text-foreground/60 h-5 w-5 cursor-pointer duration-200" />
        <Button className="ml-2" size={'lg'}>
          Login
        </Button>
      </div>
    </header>
  )
}
