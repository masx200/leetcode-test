package check_completeness_of_a_binary_tree

import serialize_and_deserialize_binary_tree "github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree"

type TreeNode = serialize_and_deserialize_binary_tree.TreeNode

func isCompleteTree(root *TreeNode) bool {
	if root == nil {
		return false
	}
	var queue []*TreeNode

	queue = append(queue, root)
	var isFindNull = false
	for len(queue) > 0 {
		var node = queue[0]
		queue = queue[1:]
		if node == nil {
			isFindNull = true

		} else {
			if isFindNull {
				return false
			}
			queue = append(queue, node.Left)
			queue = append(queue, node.Right)
		}
	}
	return true
}
