package org.masx200.leetcode_test.possible_bipartition

import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import org.junit.jupiter.api.Test
import kotlin.test.assertContentEquals

internal class SolutionTest {

    @Test
    fun possibleBipartition() {
        assertContentEquals(
            listOf(true, false, false), listOf(
                Pair(4, "[[1,2],[1,3],[2,4]]"),
                Pair(3, "[[1,2],[1,3],[2,3]]"), Pair(5, "[[1,2],[2,3],[3,4],[4,5],[1,5]]")
            ).map {
                Solution().possibleBipartition(it.first, Json.decodeFromString(it.second))
            }
        )
    }
}