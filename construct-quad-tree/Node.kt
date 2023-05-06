package com.github.masx200.leetcode_test.construct_quad_tree


class Node(
    var `val`: Boolean, var isLeaf: Boolean, var topLeft: Node? = null,
    var topRight: Node? = null,
    var bottomLeft: Node? = null,
    var bottomRight: Node? = null
)
