package com.github.masx200.leetcode_test.three_in_one_lcci

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test


internal class TripleInOneTest {
    @Test
    fun push() {
        val tio = TripleInOne(1)
        tio.push(0, 1)
        tio.push(0, 2)
        assertEquals(1, tio.pop(0))
        assertEquals(-1, tio.pop(0))
        assertEquals(-1, tio.pop(0))
        assertEquals(true, tio.isEmpty(0))
    }
}