import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { CheckoutPage } from './pages/CheckoutPage'
import { ProductsPage } from './pages/ProductsPage'
import type { CartItem } from './types'

const CART_STORAGE_KEY = 'webshop-cart'

function readCartItemCount(): number {
  if (typeof window === 'undefined') {
    return 0
  }

  try {
    const rawCart = window.localStorage.getItem(CART_STORAGE_KEY)
    const parsedCart = rawCart ? (JSON.parse(rawCart) as CartItem[]) : []
    return parsedCart.reduce((total, item) => total + item.quantity, 0)
  } catch {
    return 0
  }
}

export function App() {
  const [cartItemCount, setCartItemCount] = useState<number>(() => readCartItemCount())

  useEffect(() => {
    const syncCartCount = () => setCartItemCount(readCartItemCount())

    window.addEventListener('storage', syncCartCount)
    window.addEventListener('cart-updated', syncCartCount as EventListener)

    return () => {
      window.removeEventListener('storage', syncCartCount)
      window.removeEventListener('cart-updated', syncCartCount as EventListener)
    }
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a' }}>
      <Header cartItemCount={cartItemCount} />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px 48px' }}>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
    </div>
  )
}
