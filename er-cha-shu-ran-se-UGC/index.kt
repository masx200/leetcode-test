package com.github.masx200.leetcode_test.er_cha_shu_ran_se_ugc

import com.github.masx200.leetcode_test.insert_into_a_binary_search_tree.TreeNode

class Solution {
    fun maxValue(root: TreeNode?, k: Int): Int {
        return dfs(root, k).max() ?: Int.MIN_VALUE
    }
}

private fun dfs(root: TreeNode?, k: Int): IntArray {
    val ans = IntArray(k + 1)

    if (root == null) {
        return ans
    }
    val left = dfs(root.left, k)
    val right = dfs(root.right, k)

    ans.fill(left[k] + right[k])

    for (i in 1..k) {
        var temp = Int.MIN_VALUE
        for (j in 0 until i) {
            temp = Math.max(temp, left[j] + right[i - 1 - j])
        }
        ans[i] = Math.max(ans[i], temp + root.`val`)
    }
    return ans
}
