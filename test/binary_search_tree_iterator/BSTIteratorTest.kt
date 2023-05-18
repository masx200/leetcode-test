package com.github.masx200.leetcode_test.binary_search_tree_iterator

import com.github.masx200.leetcode_test.utils.TreeNodeLeetCodeParse
import org.junit.jupiter.api.Test
import kotlin.test.assertContentEquals

internal class BSTIteratorTest {

    @Test
    fun testnext() {
        val iterator = BSTIterator(TreeNodeLeetCodeParse("[7, 3, 15, null, null, 9, 20]"))

        val res = mutableListOf<Int>()
        while (iterator.hasNext()) {
            res.add(iterator.next())
        }
        assertContentEquals(res, listOf(3, 7, 9, 15, 20))
    }
}
