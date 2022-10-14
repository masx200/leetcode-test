package masx200.leetcode_test.design_skiplist


import kotlin.test.assertEquals
import kotlin.test.Test
class TestSkiplistTest {

    @Test
    fun Testsearch() {
        val skiplist = Skiplist()
        skiplist.add(1)
        skiplist.add(2)
        skiplist.add(3)
        assertEquals(false, skiplist.search(0)) // 返回 false
        skiplist.add(4)
        assertEquals(true, skiplist.search(1)) // 返回 true
        assertEquals(false, skiplist.erase(0)) // 返回 false，0 不在跳表中
        assertEquals(true, skiplist.erase(1)) // 返回 true
        assertEquals(false, skiplist.search(1)) // 返回 false，1 已被擦除
        //
        //        println("masx200.leetcode_test.design_skiplist")
        skiplist.add(4)
        skiplist.add(4)
        assertEquals(true, skiplist.erase(4))
        assertEquals(true, skiplist.search(4))
    }
}
