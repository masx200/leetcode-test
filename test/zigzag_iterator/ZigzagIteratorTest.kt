package com.github.masx200.leetcode_test.zigzag_iterator


import org.junit.jupiter.api.Test
import kotlin.test.assertContentEquals

class ZigzagIteratorTest {


    @Test
    fun nextTest() {

        val v1 = listOf<Int>(1, 2)
        val v2 = listOf<Int>(3, 4, 5, 6)
        val OUTPUT = listOf<Int>(1, 3, 2, 4, 5, 6)


        val zzit = ZigzagIterator(v1, v2)

        val res: MutableList<Int> = mutableListOf<Int>()

        while (zzit.hasNext()) {
            res.add(zzit.next())
        }
        assertContentEquals(res, OUTPUT)
    }

    @Test
    fun hasNextTest() {
        val v1 = listOf<Int>(1)
        val v2 = listOf<Int>()
        val OUTPUT = listOf<Int>(1)


        val zzit = ZigzagIterator(v1, v2)

        val res: MutableList<Int> = mutableListOf<Int>()

        while (zzit.hasNext()) {
            res.add(zzit.next())
        }
        assertContentEquals(res, OUTPUT)
    }

    @Test
    fun hasNextTest2() {
        val v1 = listOf<Int>()
        val v2 = listOf<Int>(1)
        val OUTPUT = listOf<Int>(1)


        val zzit = ZigzagIterator(v1, v2)

        val res: MutableList<Int> = mutableListOf<Int>()

        while (zzit.hasNext()) {
            res.add(zzit.next())
        }
        assertContentEquals(res, OUTPUT)
    }
}