package com.github.masx200.leetcode_test.maximum_number_of_weeks_for_which_you_can_work

class Solution {
    fun numberOfWeeks(milestones: IntArray): Long {
        var sum: Long = 0
        var max: Long = 0
        milestones.forEach {
            sum += it.toLong()
            max = Math.max(max, it.toLong())
        }
        return if (max * 2 > sum) (sum - max) * 2 + 1 else sum
    }
}
