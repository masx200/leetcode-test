package com.github.masx200.leetcode_test.operations_lcci

import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class OperationsTest {

    @Test
    fun minus() {
        val operations = Operations()
        assertEquals(-1, operations.minus(1, 2)) //返回-1
        assertEquals(12, operations.multiply(3, 4)) //返回12
        assertEquals(-2, operations.divide(5, -2)) //返回-2
    }

    @Test
    fun multiply() {
    }


}