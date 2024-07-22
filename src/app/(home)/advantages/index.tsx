import { CircleDollarSign, CreditCard, Headset, Package } from 'lucide-react'

export function Advantages() {
  return (
    <section className="container my-40">
      <div className="grid grid-cols-4">
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
  )
}
