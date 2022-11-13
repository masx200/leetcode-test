package com.github.masx200.leetcode_test.count_ways_to_build_good_string

const val mod = (1e9 + 7).toInt();

class Solution {
    fun countGoodStrings(low: Int, high: Int, zero: Int, one: Int): Int {
        val dp = IntArray(high + 1) { 0 }
        dp[0] = 1
        var ans = 0
        for (i in 1..high) {
            if (i >= zero) dp[i] += dp[i - zero];
            if (i >= one) dp[i] += dp[i - one];
            dp[i] = (dp[i] % mod);
            if (i >= low) ans = ((ans + dp[i]) % mod);
        }
        return ans;
    }
}