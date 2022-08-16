package construct_binary_tree_from_preorder_and_inorder_traversal

import (
	"testing"

	"gotest.tools/v3/assert"
)

func TestBuildTree(t *testing.T) {

	assert.DeepEqual(t, &TreeNode{Val: -1}, buildTree([]int{-1}, []int{-1}))
}
