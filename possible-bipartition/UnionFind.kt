package com.github.masx200.leetcode_test.possible_bipartition

class UnionFind<T> {
    fun union(a: T, b: T) {
        val fa = this.find(a)
        val fb = this.find(b)
        if (fa == fb) {
            return
        }
        val sa = this.sizes[fa] ?: 1
        val sb = this.sizes[fb] ?: 1

        if (sa < sb) {
            this.parents[fa] = fb
            this.sizes[fb] = sb + sa
        } else {
            this.parents[fb] = fa
            this.sizes[fa] = sb + sa
        }
    }

    private val sizes = mutableMapOf<T, Int>()
    private val parents = mutableMapOf<T, T>()
    fun connected(p: T, q: T): Boolean {
        return this.find(p) == this.find(q)
    }

    fun find(x: T): T {
        if (x != (this.parents[x] ?: x)) {
            this.parents[x] = this.find(this.parents[x] ?: x)

        }
        return this.parents[x] ?: x
    }

    fun size(x: T): Int {
        return this.sizes.getOrDefault(x, 1)

    }
}