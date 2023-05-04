package com.github.masx200.leetcode_test.binary_search_tree_iterator

import com.github.masx200.leetcode_test.insert_into_a_binary_search_tree.TreeNode

class BSTIterator(root: TreeNode?) {
    private val generator = InOrderIterator(root).iterator()
    fun next(): Int {
        return this.generator.next()
    }

    fun hasNext(): Boolean {
        return this.generator.hasNext()
    }
}

fun InOrderIterator(root: TreeNode?): Sequence<Int> {
    return sequence {
        if (root == null) return@sequence

        yieldAll(InOrderIterator(root.left))
        yield(root.`val`)
        yieldAll(InOrderIterator(root.right))
    }
}
