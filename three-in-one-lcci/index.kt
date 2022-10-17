package org.masx200.leetcode_test.three_in_one_lcci

class TripleInOne(stackSize: Int) {
    private val stack: IntArray
    private val size = stackSize

    init {
        stack = IntArray((stackSize + 1) * 3) { 0 }
    }

    fun push(stackNum: Int, value: Int) {

        if (stack[stackNum] == size) return
        stack[3 + stackNum * size + stack[stackNum]] = value

        stack[stackNum]++
    }

    fun pop(stackNum: Int): Int {
        if (this.isEmpty(stackNum)) return -1
        val result = this.peek(stackNum)

        stack[stackNum]--

        return result
    }

    fun peek(stackNum: Int): Int {
        if (this.isEmpty(stackNum)) return -1
        return stack[3 + stackNum * size + stack[stackNum] - 1]
    }

    fun isEmpty(stackNum: Int): Boolean {
        return stack[stackNum] == 0
    }
}
