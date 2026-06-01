package com.webshop.model

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "product")
data class Product(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
    val name: String = "",
    val price: Double = 0.0,
    @Column(length = 2000)
    val description: String = "",
    @Column(name = "image_url")
    val imageUrl: String = "",
    val category: String = "",
    val stock: Int = 0,
)
