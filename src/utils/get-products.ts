import Stripe from 'stripe'

import { stripe } from '@/api/stripe'

export async function getProducts() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      category: product.metadata.category,
      imageURL: product.images[0],
      price: price.unit_amount ?? 0 / 100,
    }
  })

  return products
}
