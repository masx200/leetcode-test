package utils

import (
	"strings"

	treenode "github.com/masx200/leetcode-TreeNode-go"
	serialize_and_deserialize_binary_tree "github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree"
)

type TreeNode = serialize_and_deserialize_binary_tree.TreeNode

func TreeNodeLeetCodeParse(s string) *TreeNode {
	s = strings.ReplaceAll(s, " ", "")
	var t, e = treenode.NewTreeNode(s)
	if e != nil {
		panic(e)
	}
	return treeNodeNew(t)
}

func treeNodeNew(t *treenode.TreeNode) *TreeNode {

	if t == nil {
		return nil
	}
	return &TreeNode{Val: t.Val, Left: treeNodeNew(t.Left), Right: treeNodeNew(t.Right)}
}
