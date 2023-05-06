package com.github.masx200.leetcode_test.design_skiplist

class Skiplist {
    private val storage = hashMapOf<Int, Int>()

    fun search(target: Int): Boolean {
        return storage.getOrDefault(target, 0) > 0
    }

    fun add(num: Int) {
        storage[num] = storage.getOrDefault(num, 0) + 1
    }

    fun erase(num: Int): Boolean {
        if (storage.getOrDefault(num, 0) == 1) {
            storage.remove(num)
            return true
        }
        return if (search(num)) {
            storage[num] = storage.getOrDefault(num, 0) - 1
            true
        } else {
            false
        }
    }
}
