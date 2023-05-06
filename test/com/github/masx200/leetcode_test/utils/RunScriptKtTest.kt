package com.github.masx200.leetcode_test.utils

import com.alibaba.fastjson2.JSON
import com.alibaba.fastjson2.JSONArray
import com.github.masx200.leetcode_test.operations_lcci.mapToLong
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import org.junit.jupiter.api.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class Operations {

    fun minus(a: Int, b: Int): Int {
        return a - b
    }

    fun multiply(a: Int, b: Int): Int {
        return a * b
    }

    fun divide(a: Int, b: Int): Int {
        return a / b
    }
}

class RunScriptKtTest {
    @Test
    fun minus() {
        val operations = Operations()
        assertEquals(-1, operations.minus(1, 2))
        assertEquals(12, operations.multiply(3, 4))
        assertEquals(-2, operations.divide(5, -2))
    }

    @Test
    fun runScript() {
        val actual: JSONArray =
            JSON.parseArray(
                """
[
                null,
                2147483647,
                -2147483648,
                2147483647,
                -2147483600,
                -2147483647,
                -2147483648
            ]
""",
            )

        @Suppress("UNCHECKED_CAST")
        val expected: List<Any?> =
            runScript(
                Json.decodeFromString(
                    """
[
                    "Operations",
                    "minus",
                    "minus",
                    "multiply",
                    "multiply",
                    "divide",
                    "divide"
]
                """,
                ),
                JSON.parseArray(
                    """
[
                    [],
                    [0, -2147483647],
                    [-1, 2147483647],
                    [-1, -2147483647],
                    [-100, 21474836],
                    [2147483647, -1],
                    [-2147483648, 1]
                ]
""",
                ) as
                    ArrayList<ArrayList<Any>>,
                Operations::class,
            )

        assertContentEquals(mapToLong(expected), mapToLong(actual))
    }
}
