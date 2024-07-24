import { stripe } from '@/api/stripe'

export async function getCategories() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const categories = response.data.map((category) => category.metadata.category)

  const uniqueCategories = Array.from(new Set(categories))

  return uniqueCategories
}
