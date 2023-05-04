package com.github.masx200.leetcode_test.serialize_and_deserialize_binary_tree

import com.github.masx200.leetcode_test.insert_into_a_binary_search_tree.TreeNode

class Codec {

    fun serialize(root: TreeNode?): String {
        fun dfs(node: Any?): String {
            return when (node) {
                null -> "null"
                is TreeNode -> {
                    listOf(node.`val`, node.left, node.right).joinToString(",", "[", "]") { element,
                        ->
                        dfs(element)
                    }
                }

                else -> node.toString()
            }
        }
        return dfs(root)
    }

    fun deserialize(data: String): TreeNode? {
        val datastr = data.replace(" ", "")
        var i = 0
        fun dfs(data: String): TreeNode? {
            val node = TreeNode()
            val children = mutableListOf<TreeNode?>()
            var sign = 1
            while (i < data.length) {
                if (data[i] == ',') {
                    i++
                } else if (data[i] == '-') {
                    sign = -1
                    i++
                } else if (data[i].isDigit()) {
                    var next = i - 1
                    var j = i
                    while (j < data.length) {
                        if (!data[j].isDigit()) {
                            next = j
                            break
                        }
                        j++
                    }

                    node.`val` = data.substring(i, next).toInt() * sign
                    i = next
                    sign = 1
                } else if (data[i] == '[') {
                    i++
                    children.add(dfs(data))
                } else if (data[i] == ']') {
                    i++
                    children.forEachIndexed { index, tree ->
                        if (index == 0) node.left = tree else if (index == 1) node.right = tree
                    }

                    return node
                } else if (data.substring(i, i + 4) == "null") {
                    i += 4
                    children.add(null)
                } else {
                    i++
                }
            }

            return children[0]
        }
        return when (data) {
            "null" -> null
            else -> dfs(datastr)
        }
    }
}
