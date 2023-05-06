package com.github.masx200.leetcode_test.remove_vowels_from_a_string

class Solution {

    fun removeVowels(s: String): String {
        val set = hashSetOf('a', 'i', 'o', 'u', 'e')

        return s.map { if (set.contains(it)) "" else it }.joinToString("")
    }
}
