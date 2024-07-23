import { Heart, Menu, Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

import { HeaderLink } from './header-link'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

export function Header() {
  return (
    <header className="container grid h-20 grid-cols-2 items-center md:grid-cols-3">
      <Dialog>
        <Image
          className="h-auto w-32"
          src={'/logo.png'}
          alt=""
          width={1623}
          height={305}
        />
        <nav className="mx-auto hidden gap-4 md:flex">
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/shop">Shop</HeaderLink>
          <HeaderLink href="/our-story">Our Story</HeaderLink>
          <HeaderLink href="/blog">Blog</HeaderLink>
          <HeaderLink href="/contact-us">Contact Us</HeaderLink>
        </nav>
        <div className="ml-auto hidden items-center gap-4 md:flex">
          <Search className="h-5 w-5 cursor-pointer duration-200 hover:stroke-[3px]" />
          <Heart className="h-5 w-5 cursor-pointer duration-200 hover:stroke-[3px]" />
          <ShoppingCart className="h-5 w-5 cursor-pointer duration-200 hover:stroke-[3px]" />
          <Button className="ml-2" size={'lg'}>
            Login
          </Button>
        </div>
        <div className="ml-auto flex items-center gap-4 md:hidden">
          <Search className="h-5 w-5 cursor-pointer duration-200 hover:font-bold" />
          <Heart className="h-5 w-5 cursor-pointer duration-200 hover:font-bold" />
          <ShoppingCart className="h-5 w-5 cursor-pointer duration-200 hover:font-bold" />
          <DialogTrigger asChild>
            <Menu className="" />
          </DialogTrigger>
        </div>
        <DialogContent className="top-[25%] w-[90%]">
          <DialogTitle className="text-xl">Menu</DialogTitle>
          <DialogDescription className="sr-only">
            Chose where you wanna go
          </DialogDescription>
          <nav className="flex flex-col gap-4">
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/shop">Shop</HeaderLink>
            <HeaderLink href="/our-story">Our Story</HeaderLink>
            <HeaderLink href="/blog">Blog</HeaderLink>
            <HeaderLink href="/contact-us">Contact Us</HeaderLink>
          </nav>

          <Button className="w-max">Login</Button>
        </DialogContent>
      </Dialog>
    </header>
  )
}
