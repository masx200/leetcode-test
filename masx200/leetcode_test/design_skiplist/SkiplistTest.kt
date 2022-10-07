package masx200.leetcode_test.design_skiplist

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

internal class SkiplistTest {

    @Test
    fun search() {
        val skiplist = Skiplist();
        skiplist.add(1);
        skiplist.add(2);
        skiplist.add(3);
        assertEquals(false, skiplist.search(0));   // 返回 false
        skiplist.add(4);
        assertEquals(true, skiplist.search(1));   // 返回 true
        assertEquals(false, skiplist.erase(0))    // 返回 false，0 不在跳表中
        assertEquals(true, skiplist.erase(1));    // 返回 true
        assertEquals(false, skiplist.search(1));   // 返回 false，1 已被擦除
//
//        println("masx200.leetcode_test.design_skiplist")
    }

}