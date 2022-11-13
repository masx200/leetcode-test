package  com.github.masx200.leetcode_test.number_of_distinct_averages

class Solution {
    fun distinctAverages(nums: IntArray): Int {
        nums.sort()

        return nums.mapIndexed { i, v -> v + nums[nums.size - 1 - i] }.toHashSet().size
    }
}