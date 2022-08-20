package index

import serialize_and_deserialize_binary_tree "github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree"

type TreeNode = serialize_and_deserialize_binary_tree.TreeNode

func insertIntoMaxTree(root *TreeNode, val int) *TreeNode {
	if root == nil || root.Val < val {
		return &TreeNode{Val: val, Left: root}

	}

	root.Right = insertIntoMaxTree(root.Right, val)
	return root
}
