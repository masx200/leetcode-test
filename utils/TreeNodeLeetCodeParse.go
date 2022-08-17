package utils

import treenode "github.com/egregors/TreeNode"

func TreeNodeLeetCodeParse(s string) *TreeNode {
	var t, e = treenode.NewTreeNode(s)
	if e != nil {
		panic(e)
	}
	return t
}

type TreeNode = treenode.TreeNode
