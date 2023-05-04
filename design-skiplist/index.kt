package com.github.masx200.leetcode_test.design_skiplist

class Skiplist {
    private val storage = hashMapOf<Int, Int>()

    fun search(target: Int): Boolean {
        return storage.getOrDefault(target, 0) > 0
    }

    fun add(num: Int) {
        storage.set(num, storage.getOrDefault(num, 0) + 1)
    }

    fun erase(num: Int): Boolean {
        if (storage.getOrDefault(num, 0) == 1) {
            storage.remove(num)
            return true
        }
        if (search(num)) {
            storage.set(num, storage.getOrDefault(num, 0) - 1)
            return true
        } else {
            return false
        }
    }
}
