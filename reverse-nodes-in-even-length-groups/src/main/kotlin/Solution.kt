package com.github.masx200.leetcode_test.reverse_nodes_in_even_length_groups

class Solution {
    fun reverseEvenLengthGroups(head: ListNode?): ListNode? {
        if (null == head) return null
        var cur = head
        val nodes = mutableListOf<ListNode>()

        var group = 1
        while (null != cur) {
            if (nodes.size == group) {
// println("group=$group")
//  println(nodes.map{it.`val`})
                if ((group and 1) == 0) {

                    nodes.map { it.`val` }.reversed().forEachIndexed { i, v -> nodes[i].`val` = v }
                }

                nodes.clear()
                group++

                nodes.add(cur)
            } else
                if (nodes.size < group) {

                    nodes.add(cur)
                }
            cur = cur.next


        }
        if (nodes.size > 0) {
            // println("group=$group")
            //  println(nodes.map{it.`val`})
            if ((nodes.size and 1) == 0) nodes.map { it.`val` }.reversed().forEachIndexed { i, v -> nodes[i].`val` = v }
        }

        return head
    }
}