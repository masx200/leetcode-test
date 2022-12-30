package com.github.masx200.leetcode_test.minimum_number_of_moves_to_seat_everyone

import kotlin.math.abs

class Solution {
    fun minMovesToSeat(seats: IntArray, students: IntArray): Int {
        seats.sort()
        students.sort()
        return seats.mapIndexed { i, v -> abs(v - students[i]) }.sum()
    }
}