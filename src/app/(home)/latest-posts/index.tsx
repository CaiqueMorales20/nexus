import { ExternalLinkIcon } from 'lucide-react'

export function LatestPosts() {
  return (
    <section className="container mt-20 md:mt-40">
      <h2 className="mb-16 text-center text-2xl font-bold">Latest posts</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="group flex h-[415px] w-full items-center justify-center bg-muted hover:bg-muted/80">
          <ExternalLinkIcon className="invisible group-hover:visible" />
        </div>
        <div className="group flex h-[415px] w-full items-center justify-center bg-muted hover:bg-muted/80">
          <ExternalLinkIcon className="invisible group-hover:visible" />
        </div>
        <div className="group flex h-[415px] w-full items-center justify-center bg-muted hover:bg-muted/80">
          <ExternalLinkIcon className="invisible group-hover:visible" />
        </div>
        <div className="group flex h-[415px] w-full items-center justify-center bg-muted hover:bg-muted/80">
          <ExternalLinkIcon className="invisible group-hover:visible" />
        </div>
      </div>
    </section>
  )
}
