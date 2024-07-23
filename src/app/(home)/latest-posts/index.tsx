import { ExternalLinkIcon } from 'lucide-react'

export function LatestPosts() {
  return (
    <section className="container mt-40">
      <h2 className="mb-16 text-center text-2xl font-bold">Latest posts</h2>
      <div className="grid grid-cols-4 gap-8">
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
