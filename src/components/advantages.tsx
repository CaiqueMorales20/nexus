import { CircleDollarSign, CreditCard, Headset, Package } from 'lucide-react'

import { Separator } from './ui/separator'

export function Advantages() {
  return (
    <>
      <Separator className="my-20 md:container md:my-40" />
      <section className="container mb-20 md:mb-40">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Package className="mb-4" />
            <h3 className="mb-1 font-bold">Free Shipping</h3>
            <p>Free shipping for orders above $150</p>
          </div>
          <div>
            <CircleDollarSign className="mb-4" />
            <h3 className="mb-1 font-bold">Money Guarantee</h3>
            <p>Whitin 30 days for an exchange</p>
          </div>
          <div>
            <Headset className="mb-4" />
            <h3 className="mb-1 font-bold">Online Suport</h3>
            <p>24 hours a day, 7 days a week</p>
          </div>
          <div>
            <CreditCard className="mb-4" />
            <h3 className="mb-1 font-bold">Flexible Payment</h3>
            <p>Pay with multiple credit cards</p>
          </div>
        </div>
      </section>
    </>
  )
}
