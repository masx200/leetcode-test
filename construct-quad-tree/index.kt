package com.github.masx200.leetcode_test.construct_quad_tree

class Solution {

    fun construct(grid: Array<IntArray>): Node? {
        val n = grid.size

        val dp = Array(n) {
            IntArray(n)
        }

        fun dfs(top: Int, left: Int, n: Int): Node? {
            var ans: Node? = null
            if (n == 0) {
            } else {
                val value = grid[top][left] == 1

                if (dp[top + n - 1][left + n - 1] >= n) {
                    // println("$top $left $n ")
                    ans = Node(value, true)
                } else {
                    ans = Node(value, false)
                    val currentLen = n shr 1
                    ans.topLeft = dfs(top, left, currentLen)
                    ans.topRight = dfs(top, left + currentLen, currentLen)
                    ans.bottomLeft = dfs(top + currentLen, left, currentLen)
                    ans.bottomRight = dfs(top + currentLen, left + currentLen, currentLen)
                }
            }
            return ans
        }

        for (i in 0 until n) {
            for (j in 0 until n) {
                dp[i][j] = when {
                    i == 0 || j == 0 -> {
                        1
                    }

                    else -> {
                        if (grid[i - 1][j - 1] == grid[i][j] && grid[i][j] == grid[i][j - 1] && grid[i][j] == grid[i - 1][j]) {
                            var min = Math.min(dp[i - 1][j - 1], dp[i - 1][j])
                            min = Math.min(min, dp[i][j - 1])
                            min + 1
                        } else {
                            1
                        }
                    }
                }
            }
        }

        return dfs(0, 0, n)
    }
}
