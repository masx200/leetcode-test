package com.github.masx200.leetcode_test.er_cha_sou_suo_shu_de_di_kda_jie_dian_lcof

import com.github.masx200.leetcode_test.insert_into_a_binary_search_tree.TreeNode

class Solution {
    fun kthLargest(root: TreeNode?, k: Int): Int {
        reverseInOrderIterator(root).forEachIndexed { i, v ->
            if (i + 1 == k) return v
        }
        throw Error("unreachable")
    }
}

fun reverseInOrderIterator(root: TreeNode?): Sequence<Int> {
    return sequence {
        if (root == null) return@sequence

        yieldAll(reverseInOrderIterator(root.right))
        yield(root.`val`)
        yieldAll(reverseInOrderIterator(root.left))
    }
}
