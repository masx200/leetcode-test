package com.github.masx200.leetcode_test.count_vowel_strings_in_ranges

class Solution {
    fun vowelStrings(words: Array<String>, queries: Array<IntArray>): IntArray {


        val prefixs = IntArray(words.size) { 0 }

        words.forEachIndexed { i, s ->
            if (i == 0) {

                prefixs[i] = booleanToInt(isVowelString(s))
            } else {
                prefixs[i] = prefixs[i - 1] + booleanToInt(isVowelString(s))

            }

        }
        return IntArray(queries.size) {
            val li = queries[it][0]
            val ri = queries[it][1]
            if (li == ri) booleanToInt(isVowelString(words[li])) else prefixs[ri] - if (li == 0) 0 else prefixs[li - 1]
        }
    }
 private val vowels = hashSetOf('a', 'e', 'i', 'o', 'u')
    private fun isVowelString(s: String): Boolean {
       
        return s.isNotEmpty() && vowels.contains(s[0]) && vowels.contains(s.last())
    }

    fun booleanToInt(b: Boolean) = if (b) 1 else 0
}
