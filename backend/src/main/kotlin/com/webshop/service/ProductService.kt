package com.webshop.service

import com.webshop.model.Product
import com.webshop.repository.ProductRepository
import org.springframework.stereotype.Service

@Service
class ProductService(
    private val productRepository: ProductRepository,
) {
    fun getAllProducts(): List<Product> = productRepository.findAll()

    fun getProductById(id: Long): Product? = productRepository.findById(id).orElse(null)

    // TODO: Use Copilot to implement stock update logic
    // Hint: find the product, validate stock > 0, reduce by quantity, save
    fun updateStock(productId: Long, quantity: Int): Product {
        TODO("Implement using Copilot")
    }

    // TODO: Use Copilot to implement product search by name/category/description
    // Hint: start with repository.findByNameContainingIgnoreCase(query) and expand from there
    fun searchProducts(query: String): List<Product> {
        TODO("Implement using Copilot")
    }
}
