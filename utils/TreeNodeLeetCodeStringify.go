package utils

import treenode "github.com/masx200/leetcode-TreeNode-go"

func TreeNodeLeetCodeStringify(t *TreeNode) string {

	return treeNodeCreate(t).String()
}
func treeNodeCreate(t *TreeNode) *treenode.TreeNode {
	if t == nil {
		return nil
	}
	return &treenode.TreeNode{Val: t.Val, Left: treeNodeCreate(t.Left), Right: treeNodeCreate(t.Right)}
}
