interface Product {
  id: string
  name: string
  description: string | null
  category: string
  imageURL: string
  price: number
}

export type { Product }
