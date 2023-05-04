package com.github.masx200.leetcode_test.reveal_cards_in_increasing_order

import java.util.*

class Solution {
    fun deckRevealedIncreasing(deck: IntArray): IntArray {
        if (deck.isEmpty()) return deck
        deck.sortDescending()
        val queue = LinkedList<Int>()
        deck.forEachIndexed { i, d ->
            queue.addFirst(d)

            if (i != deck.size - 1) {
                queue.addFirst(queue.last())
                queue.removeLast()
            }
        }
        return queue.toIntArray()
    }
}
