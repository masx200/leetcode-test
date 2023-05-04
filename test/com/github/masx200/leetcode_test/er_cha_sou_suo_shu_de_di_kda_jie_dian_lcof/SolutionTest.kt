package com.github.masx200.leetcode_test.er_cha_sou_suo_shu_de_di_kda_jie_dian_lcof

import com.github.masx200.leetcode_test.utils.TreeNodeLeetCodeParse
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

internal class SolutionTest {

    @Test
    fun testkthLargest() {
        assertEquals(4, Solution().kthLargest(TreeNodeLeetCodeParse("[5,3,6,2,4,null,null,1]"), 3))
        assertEquals(4, Solution().kthLargest(TreeNodeLeetCodeParse(" [3,1,4,null,2]"), 1))
    }
}
