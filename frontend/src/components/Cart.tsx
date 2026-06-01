import type { CartItem } from '../types'

interface CartProps {
  items: CartItem[]
  onRemoveItem: (productId: number) => void
  onCheckout: () => void
}

export function Cart({ items, onRemoveItem, onCheckout }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <aside style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', backgroundColor: '#fff' }}>
      <h2 style={{ marginTop: 0 }}>Cart</h2>
      <p style={{ color: '#475569' }}>
        TODO: Use Copilot to render each cart item with quantity controls, pricing, and a remove action.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
        {items.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          items.map((item) => (
            <li
              key={item.product.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 0',
                borderTop: '1px solid #e2e8f0',
              }}
            >
              <div>
                <strong>{item.product.name}</strong>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                  TODO: show quantity × unit price here ({item.quantity} × ${item.product.price.toFixed(2)})
                </div>
              </div>
              <button type="button" onClick={() => onRemoveItem(item.product.id)}>
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
      <p style={{ fontWeight: 700 }}>Total: ${total.toFixed(2)}</p>
      <button type="button" onClick={onCheckout} disabled={items.length === 0}>
        Checkout
      </button>
    </aside>
  )
}
