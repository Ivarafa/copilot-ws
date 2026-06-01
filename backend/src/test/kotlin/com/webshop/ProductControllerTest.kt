package com.webshop

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc

@SpringBootTest
@AutoConfigureMockMvc
class ProductControllerTest {
    @Autowired
    lateinit var mockMvc: MockMvc

    @Test
    fun contextLoads() {
        assertThat(mockMvc).isNotNull()
    }

    // TODO (BONUS): Use Copilot /tests to generate test for GET /api/products
    // TODO (BONUS): Use Copilot /tests to generate test for POST /orders
}
