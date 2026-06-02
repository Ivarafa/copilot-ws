import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Cart } from '../components/Cart'
import { ProductCard } from '../components/ProductCard'
import { fetchProducts } from '../services/api'
import type { CartItem, Product } from '../types'

export function ProductsPage() {
  const navigate = useNavigate()
  const [products] = useState<Product[]>([])
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading] = useState<boolean>(false)
  const [error] = useState<string | null>(null)

  const handleAddToCart = (product: Product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.product.id === product.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...currentItems, { product, quantity: 1 }]
    })
  }

  const handleRemoveItem = (productId: number) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.product.id !== productId))
  }

  const handleCheckout = () => {
    navigate('/checkout')
  }

  void fetchProducts

  return (
    <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '2fr 1fr' }}>
      <section>
        <h1>Products</h1>
        <p style={{ color: '#475569', marginBottom: '24px' }}>
          TODO: Use Copilot to complete this page so it fetches products, manages cart state, and renders the catalog.
        </p>
        {/* TODO: Use Copilot to:
            1. Fetch products using fetchProducts() from '../services/api'
            2. Manage cart state with useState
            3. Implement addToCart function (add or increment quantity)
            4. Render a grid of <ProductCard> components
            5. Render <Cart> sidebar
        */}
        {loading && <p>Loading products...</p>}
        {error && <p style={{ color: '#dc2626' }}>{error}</p>}
        {products.length === 0 ? (
          <div style={{ border: '1px dashed #cbd5e1', borderRadius: '12px', padding: '24px', backgroundColor: '#fff' }}>
            <p style={{ margin: 0 }}>No products loaded yet. Ask Copilot to implement the fetch flow.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        )}
      </section>

      <Cart items={cartItems} onRemoveItem={handleRemoveItem} onCheckout={handleCheckout} />
    </div>
  )
}
