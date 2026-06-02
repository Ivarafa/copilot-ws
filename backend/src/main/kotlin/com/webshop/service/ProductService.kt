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
}
