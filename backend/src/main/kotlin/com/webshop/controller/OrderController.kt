package com.webshop.controller

import com.webshop.model.Order
import com.webshop.service.OrderService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

data class CreateOrderRequest(
    val customerName: String,
    val customerEmail: String,
    val items: List<OrderItemRequest>,
)

data class OrderItemRequest(
    val productId: Long,
    val quantity: Int,
)

@RestController
@RequestMapping("/api/orders")
class OrderController(
    private val orderService: OrderService,
) {
    @GetMapping
    fun getAllOrders(): ResponseEntity<List<Order>> {
        // GET /api/orders — TODO: return all orders
        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(emptyList())
    }

    @GetMapping("/{id}")
    fun getOrderById(@PathVariable id: Long): ResponseEntity<Order> {
        // GET /api/orders/{id} — TODO: return order by id
        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).build()
    }

    @PostMapping
    fun createOrder(@RequestBody request: CreateOrderRequest): ResponseEntity<Order> {
        // POST /api/orders — TODO: create new order from request body
        // Hint: map request.items to service commands, then call orderService.createOrder(...)
        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).build()
    }
}
