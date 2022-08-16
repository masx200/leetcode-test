package construct_binary_tree_from_preorder_and_inorder_traversal

import (
	"testing"

	"gotest.tools/v3/assert"
)

func TestBuildTree(t *testing.T) {

	assert.DeepEqual(t, &TreeNode{Val: -1}, buildTree([]int{-1}, []int{-1}))

	assert.DeepEqual(t, &TreeNode{Val: 3, Left: &TreeNode{Val: 9},
		Right: &TreeNode{Val: 20, Left: &TreeNode{Val: 15}, Right: &TreeNode{Val: 7}}}, buildTree([]int{3, 9, 20, 15, 7}, []int{9, 3, 15, 20, 7}))
}
