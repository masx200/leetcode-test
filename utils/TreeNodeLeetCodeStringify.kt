package com.github.masx200.leetcode_test.utils

import com.github.masx200.leetcode_test.insert_into_a_binary_search_tree.TreeNode

fun TreeNodeLeetCodeStringify(t: TreeNode?): String {
    return (treeNodeCreate(t)).toString()
}

private fun treeNodeCreate(t: TreeNode?): TreeNodeClass? {
    if (t == null) {
        return null
    }
    val n = TreeNodeClass()
    n.`val` = t.`val`
    n.left = treeNodeCreate(t.left)
    n.right = treeNodeCreate(t.right)
    return n
}
