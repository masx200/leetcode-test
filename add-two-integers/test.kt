package masx200.leetcode_test.add_two_integers


import kotlin.test.Test
import kotlin.test.assertEquals


@Test
fun test(
    /* args: Array<String> */
) {
    assertEquals(
        Solution().sum(111, 555),
        666
    )
    assertEquals(Solution().sum(1191, 555), 1746)
}


