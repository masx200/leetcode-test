package masx200.leetcode_test.insert_into_a_binary_search_tree

class TreeNode(var `val`: Int = 0, var left: TreeNode? = null, var right: TreeNode? = null) {}

class Solution {
    fun insertIntoBST(root: TreeNode?, `val`: Int): TreeNode? {
        if (root == null) return TreeNode(`val`)
        if (root.`val` > `val`) root.left = insertIntoBST(root.left, `val`)
        if (root.`val` < `val`) root.right = insertIntoBST(root.right, `val`)
        return root
    }
}
