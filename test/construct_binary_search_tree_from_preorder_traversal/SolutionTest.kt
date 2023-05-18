package com.github.masx200.leetcode_test.construct_binary_search_tree_from_preorder_traversal

import com.cedarsoftware.util.DeepEquals.deepEquals
import com.github.masx200.leetcode_test.utils.TreeNodeLeetCodeParse
import com.github.masx200.leetcode_test.utils.TreeNodeLeetCodeStringify
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import kotlin.test.assertTrue

internal class SolutionTest {

    @Test
    fun testBstFromPreorder() {
        assertEquals(
            listOf(intArrayOf(8, 5, 1, 7, 10, 12), intArrayOf(1, 3))
                .map { Solution().bstFromPreorder(it) }
                .map { TreeNodeLeetCodeStringify(it) },
            listOf(arrayOf(8, 5, 10, 1, 7, null, 12), arrayOf(1, null, 3)).map {
                Json.encodeToString(it)
            },
        )

        assertTrue(
            deepEquals(
                listOf(intArrayOf(8, 5, 1, 7, 10, 12), intArrayOf(1, 3)).map {
                    Solution().bstFromPreorder(it)
                },
                listOf("[8, 5, 10, 1, 7, null, 12]", "[1, null, 3]").map {
                    TreeNodeLeetCodeParse(it)
                },
            ),
        )
    }
}
