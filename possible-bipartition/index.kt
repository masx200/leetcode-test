package com.github.masx200.leetcode_test.possible_bipartition

class Solution {
    fun possibleBipartition(n: Int, dislikes: Array<IntArray>): Boolean {
        val uf = UnionFind<Int>()

        val e = Array<MutableList<Int>>(n + 1) { mutableListOf() }

        for ((a, b) in dislikes) {
            e[a].add(b)

            e[b].add(a)
        }

        e.forEachIndexed { i, v ->

            for (d in v) {
                uf.union(d, v[0])
                if (uf.connected(d, i)) return false

            }
        }
        return true
    }
}

