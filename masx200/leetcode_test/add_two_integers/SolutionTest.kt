package masx200.leetcode_test.add_two_integers

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertNotEquals
import org.junit.jupiter.api.Test

internal class SolutionTest {

    @Test
    fun sum() {
        assertEquals(Solution().sum(111, 555), 666)

        assertNotEquals(Solution().sum(111, 555), 6626)
        assertEquals(Solution().sum(1111, 555), 1666)
//        println("masx200.leetcode_test.add_two_integers")
    }
}
