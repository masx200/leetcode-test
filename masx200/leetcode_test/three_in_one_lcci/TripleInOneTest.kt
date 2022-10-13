package masx200.leetcode_test.three_in_one_lcci

import org.testng.AssertJUnit.assertEquals
import org.testng.annotations.Test


internal class TripleInOneTest {
    @Test
    fun push() {
        val tio = TripleInOne(1)
        tio.push(0, 1)
        tio.push(0, 2)
        assertEquals(1, tio.pop(0))
        assertEquals(-1, tio.pop(0))
        assertEquals(-1, tio.pop(0))
        assertEquals(true, tio.isEmpty(0))
    }
}