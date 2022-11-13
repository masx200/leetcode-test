package com.github.masx200.split_message_based_on_limit

class Solution {
    fun splitMessage(message: String, limit: Int): Array<String> {
        if (limit <= 5) return arrayOf()


        var left = 0
        var right = message.length

        while (left < right) {
            val mid = (left + right) / 2
            if (checkMessage(message, limit, mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        if (left > 0 && left < message.length + 1) {

            var len = 0
            return Array(left) {

                val endIndex = Math.max(
                    0, Math.min(message.length, len + limit - 3 - (it + 1).toString().length - left.toString().length)
                )

                val s = message.substring(len, endIndex) + "<${it + 1}/${left}>";
                if (len == endIndex) return arrayOf()
                len = endIndex
                s
            }
        }
        return arrayOf()
    }
}

private fun checkMessage(message: String, limit: Int, count: Int): Boolean {
    var len = 0

    for (i in 1..count) {
        if (3 + i.toString().length + count.toString().length >= limit) {
            return false
        }

        len += limit - (3 + i.toString().length + count.toString().length)
    }
    return len >= message.length
}
