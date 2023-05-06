package com.github.masx200.leetcode_test.split_message_based_on_limit

class Solution {
    fun splitMessage(message: String, limit: Int): Array<String> {
        if (limit <= 5) return arrayOf()
        val results = splitStrings(message, limit, 0, 10)
        if (results.isNotEmpty()) return results

        val results2 = splitStrings(message, limit, 10, 100)
        if (results2.isNotEmpty()) return results2
        val results3 = splitStrings(message, limit, 100, message.length)
        if (results3.isNotEmpty()) return results3
        return arrayOf()
    }

    private fun splitStrings(message: String, limit: Int, lleft: Int, rright: Int): Array<String> {
        var left = lleft
        var right = rright

        while (left < right) {
            val mid = (left + right) / 2
            if (checkMessage(message, limit, mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        if (left in 1 until rright) {
            var len = 0
            return Array(left) {
                val endIndex =
                    Math.max(
                        0,
                        Math.min(
                            message.length,
                            len + limit -
                                3 -
                                (it + 1).toString().length -
                                left.toString().length,
                        ),
                    )

                val s = message.substring(len, endIndex) + "<${it + 1}/$left>"

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
