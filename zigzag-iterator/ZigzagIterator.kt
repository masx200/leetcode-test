package com.github.masx200.leetcode_test.zigzag_iterator




class ZigzagIterator(v1: List<Int>, v2: List<Int>) {


    private val generator = ZigzagGenerator(v1, v2)


    private val iterator = generator.iterator()
    fun next(): Int {
        return iterator.next()
    }

    fun hasNext(): Boolean {
        return iterator.hasNext()
    }
}

private fun ZigzagGenerator(v1: List<Int>, v2: List<Int>): Sequence<Int> = sequence<Int> {
    if (v1.size < v2.size) {
        for (i in 0 until v1.size) {
            yield(v1[i])

            yield(v2[i])
        }
        for (i in v1.size until v2.size) {
            yield(v2[i])

        }
    } else {
        yieldAll(ZigzagGenerator(v2, v1))
    }

}