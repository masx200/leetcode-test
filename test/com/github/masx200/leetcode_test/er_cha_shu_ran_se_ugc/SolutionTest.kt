package com.github.masx200.leetcode_test.er_cha_shu_ran_se_ugc

import com.github.masx200.leetcode_test.utils.TreeNodeLeetCodeParse
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

internal class SolutionTest {

    @Test
    fun testmaxValue() {
        assertEquals(12, Solution().maxValue(TreeNodeLeetCodeParse("[5, 2, 3, 4]"), 2))
        assertEquals(
            16,
            Solution().maxValue(TreeNodeLeetCodeParse("[4, 1, 3, 9, null, null, 2]"), 2),
        )
    }
}
