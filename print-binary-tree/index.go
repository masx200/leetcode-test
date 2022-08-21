package print_binary_tree

import (
	"math"
	"strconv"

	serialize_and_deserialize_binary_tree "github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree"

	maximum_depth_of_binary_tree "github.com/masx200/leetcode-test/maximum-depth-of-binary-tree"
)

var maxDepth = maximum_depth_of_binary_tree.MaxDepth

type TreeNode = serialize_and_deserialize_binary_tree.TreeNode
type BinaryTreePosition struct {
	node *TreeNode
	row  int
	col  int
}

func Pow(a, b int) int {
	return int(math.Pow(float64(a), float64(b)))
}

func printTree(root *TreeNode) [][]string {
	if root == nil {
		return [][]string{}
	}
	var depth = maxDepth(root)
	var height = depth - 1
	var m = depth
	var n = (Pow(2, (m)) - 1)
	var result [][]string = make([][]string, m)
	for i := 0; i < m; i++ {
		result[i] = make([]string, n)
	}
	var cur []BinaryTreePosition = []BinaryTreePosition{{node: root, row: 0, col: ((n - 1) / 2)}}

	for len(cur) > 0 {
		var next []BinaryTreePosition = make([]BinaryTreePosition, 0)

		for _, entry := range cur {
			var node = entry.node
			var row = entry.row
			var col = entry.col
			if node != nil {
				result[row][col] = strconv.Itoa(node.Val)
				if node.Left != nil {
					next = append(next, BinaryTreePosition{
						node: node.Left,
						row:  row + 1,
						col:  col - Pow(2, height-1-row),
					})
				}
				if node.Right != nil {
					next = append(next, BinaryTreePosition{node: node.Right,
						row: row + 1,
						col: col + Pow(2, (height-1-row)),
					})

				}
			}
		}
		cur = next
	}
	return result
}
