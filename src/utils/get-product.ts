import Stripe from 'stripe'

import { stripe } from '@/api/stripe'

export async function getProduct(id: string) {
  const response = await stripe.products.retrieve(id, {
    expand: ['default_price'],
  })

  const price = response.default_price as Stripe.Price

  const product = {
    id: response.id,
    name: response.name,
    description: response.description,
    category: response.metadata.category,
    imageURL: response.images[0],
    price: price.unit_amount ?? 0 / 100,
  }

  return product
}
