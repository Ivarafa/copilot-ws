package com.webshop.service

import com.webshop.model.Order
import com.webshop.repository.OrderRepository
import com.webshop.repository.ProductRepository
import org.springframework.stereotype.Service

data class CreateOrderItemCommand(
    val productId: Long,
    val quantity: Int,
)

@Service
class OrderService(
    private val orderRepository: OrderRepository,
    private val productRepository: ProductRepository,
) {
    fun getAllOrders(): List<Order> = orderRepository.findAll()

    // TODO: Use Copilot to implement order lookup logic
    // Hint: use orderRepository.findById(id).orElse(null)
    fun getOrderById(id: Long): Order? {
        TODO("Implement using Copilot")
    }

    // TODO: Use Copilot to implement order creation logic
    // It should:
    // 1. Validate that each requested product exists and has enough stock
    // 2. Create an Order with OrderItem entries
    // 3. Reduce product stock levels
    // 4. Save and return the new order
    fun createOrder(
        customerName: String,
        customerEmail: String,
        items: List<CreateOrderItemCommand>,
    ): Order {
        TODO("Implement using Copilot")
    }
}
