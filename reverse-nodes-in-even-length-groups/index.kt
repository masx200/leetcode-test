package com.github.masx200.leetcode_test.reverse_nodes_in_even_length_groups

class Solution {
    fun reverseEvenLengthGroups(head: ListNode?): ListNode? {
        if (null == head) return null
        for (nodes in generateEvenGroups(head)) {
            reverseListNodes(nodes)
        }
        return head
    }

    private fun reverseListNodes(nodes: MutableList<ListNode>) {
        nodes.map { it.`val` }.reversed().forEachIndexed { i, v -> nodes[i].`val` = v }
    }

    private fun generateEvenGroups(head: ListNode?): Sequence<MutableList<ListNode>> {
        return sequence {
            if (null == head) return@sequence
            var cur = head
            val nodes = mutableListOf<ListNode>()

            var group = 1
            while (null != cur) {
                if (nodes.size == group) {
                    if ((group and 1) == 0) {
                        yield(nodes)
                    }

                    nodes.clear()
                    group++
                }
                nodes.add(cur)

                cur = cur.next
            }

            if (nodes.size > 0) {
                if ((nodes.size and 1) == 0) {
                    yield(nodes)
                }
            }

            return@sequence
        }
    }
}
