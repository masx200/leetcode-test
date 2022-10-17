package com.github.masx200.leetcode_test.utils

import com.github.masx200.leetcode_test.insert_into_a_binary_search_tree.TreeNode
import com.github.masx200.leetcode_treenode_java.TreeNode.constructTree
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json

fun TreeNodeLeetCodeParse(s: String): TreeNode? {
    return treeNodeNew(constructTree(Json.decodeFromString<Array<Int?>>(s)))
}
typealias TreeNodeClass = com.github.masx200.leetcode_treenode_java.TreeNode

private fun treeNodeNew(t: TreeNodeClass?): TreeNode? {
    if (t == null) {
        return null
    }
    val n = TreeNode()
    n.`val` = t.`val`
    n.left = treeNodeNew(t.left)
    n.right = treeNodeNew(t.right)
    return n
}