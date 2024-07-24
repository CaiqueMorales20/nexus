function formatCurrency(price: number) {
  const priceInDollars = price / 100
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(priceInDollars)

  return formattedPrice
}

export { formatCurrency }
