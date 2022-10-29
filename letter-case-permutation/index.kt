package com.github.masx200.letter_case_permutation

class Solution {
    fun letterCasePermutation(s: String): List<String> {
        return s.split("").filter { it.isNotEmpty() }
            .map { if ("\\d".toRegex().matches(it)) listOf(it) else listOf(it.lowercase(), it.uppercase()) }.fold(
                listOf("")
            ) { p, c -> p.map { v -> c.map { b -> v + b } }.flatten() }
    }
}