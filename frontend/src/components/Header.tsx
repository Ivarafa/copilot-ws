import { Link } from 'react-router-dom'

interface HeaderProps {
  cartItemCount: number
}

export function Header({ cartItemCount }: HeaderProps) {
  return (
    <header
      style={{
        borderBottom: '1px solid #e2e8f0',
        backgroundColor: '#ffffff',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#0f172a',
            textDecoration: 'none',
          }}
        >
          🛒 Webshop
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/" style={{ color: '#334155', textDecoration: 'none', fontWeight: 600 }}>
            Products
          </Link>
          <Link
            to="/checkout"
            aria-label="Go to checkout"
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '999px',
              border: '1px solid #cbd5e1',
              color: '#0f172a',
              textDecoration: 'none',
              backgroundColor: '#f8fafc',
            }}
          >
            <span aria-hidden="true" style={{ fontSize: '1.1rem' }}>
              🛍️
            </span>
            <span
              style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                minWidth: '20px',
                height: '20px',
                padding: '0 6px',
                borderRadius: '999px',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {cartItemCount}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
