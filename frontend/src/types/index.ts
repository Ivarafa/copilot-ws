export interface Product {
  id: number
  name: string
  price: number
  description: string
  imageUrl: string
  category: string
  stock: number
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface OrderItemRequest {
  productId: number
  quantity: number
}

export interface CreateOrderRequest {
  customerName: string
  customerEmail: string
  items: OrderItemRequest[]
}

export interface Order {
  id: number
  customerName: string
  customerEmail: string
  total: number
  status: string
  createdAt: string
}
