package com.github.masx200.leetcode_test.min_cost_to_connect_all_points

class Solution {
    fun minCostConnectPoints(points: Array<IntArray>): Int {
        val p0 = points[0]
        val ds = points.mapIndexed { i, p -> Pair(i, 曼哈顿距离(p, p0)) }.toMap(mutableMapOf())
        ds.remove(0)
        var ans = 0
        while (ds.isNotEmpty()) {
            var mi = 0
            var md = Int.MAX_VALUE

            var p1 = IntArray(0)
            ds.onEach { (i, d) ->
                val p = points[i]
                if (d < md) {
                    mi = i
                    p1 = p
                    md = d
                }
            }
            ds.remove(mi)
            ans += md
            ds.onEach { (i, d) ->
                val p = points[i]
                ds.set(i, Math.min(d, 曼哈顿距离(p, p1)))
            }
        }
        return ans
    }
}

fun 曼哈顿距离(a: IntArray, b: IntArray): Int {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
}
