package index

import maximum_binary_tree_ii "github.com/masx200/leetcode-test/maximum-binary-tree-ii"
import serialize_and_deserialize_binary_tree "github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree"

type TreeNode = serialize_and_deserialize_binary_tree.TreeNode

var insertIntoMaxTree = maximum_binary_tree_ii.InsertIntoMaxTree

func constructMaximumBinaryTree(nums []int) *TreeNode {
	var node *TreeNode = nil
	for _, v := range nums {
		node = insertIntoMaxTree(node, v)
	}
	return node
}
