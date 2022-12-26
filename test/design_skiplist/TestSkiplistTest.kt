package com.github.masx200.leetcode_test.design_skiplist

import kotlin.test.Test
import kotlin.test.assertEquals

class TestSkiplistTest {

    @Test
    fun Testsearch() {
        val skiplist = Skiplist()
        skiplist.add(1)
        skiplist.add(2)
        skiplist.add(3)
        assertEquals(false, skiplist.search(0))
        skiplist.add(4)
        assertEquals(true, skiplist.search(1))
        assertEquals(false, skiplist.erase(0))
        assertEquals(true, skiplist.erase(1))
        assertEquals(false, skiplist.search(1))

        skiplist.add(4)
        skiplist.add(4)
        assertEquals(true, skiplist.erase(4))
        assertEquals(true, skiplist.search(4))
    }
}
