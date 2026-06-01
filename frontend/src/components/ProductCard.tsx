import type { Product } from '../types'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

// TODO: Use Copilot to implement this component
// It should display: product image, name, category, price (formatted as currency), stock badge, and an "Add to Cart" button
// The button should be disabled when stock === 0
// Hint: Try typing "return (" and let Copilot suggest the JSX
export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  // TODO: implement
  return <div>ProductCard placeholder for {product.name}</div>
}
