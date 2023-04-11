package com.github.masx200.leetcode_test.remove_vowels_from_a_string

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class SolutionTest {

    @Test
    fun removeVowels() {
        assertEquals("ltcdscmmntyfrcdrs", Solution().removeVowels("leetcodeisacommunityforcoders"))
        assertEquals("", Solution().removeVowels("aeiou"))
    }
}