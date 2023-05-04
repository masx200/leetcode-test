package com.github.masx200.leetcode_test.construct_binary_search_tree_from_preorder_traversal

import com.github.masx200.leetcode_test.insert_into_a_binary_search_tree.TreeNode

class Solution {
    fun bstFromPreorder(preorder: IntArray): TreeNode? {
        var index = 0
        val len = preorder.size

        fun dfs(lowerBound: Int, upperBound: Int): TreeNode? {
            if (index == len) return null
            val cur = preorder[index]
            if (cur < lowerBound || cur > upperBound) return null
            index++
            val root = TreeNode(cur)
            root.left = dfs(lowerBound, cur)
            root.right = dfs(cur, upperBound)
            return root
        }
        return dfs(Integer.MIN_VALUE, Integer.MAX_VALUE)
    }
}
