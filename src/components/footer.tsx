import Image from 'next/image'

import { Separator } from './ui/separator'

export function Footer() {
  return (
    <footer className="bg-white py-20 dark:bg-black">
      <div className="container">
        <Image
          className="h-auto w-40"
          src={'/logo.png'}
          alt=""
          width={1623}
          height={305}
        />

        <Separator className="mt-20 w-full text-gray-200" />
        <p className="mt-6 text-center text-foreground/80">
          @ 2024 Nexus - Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
