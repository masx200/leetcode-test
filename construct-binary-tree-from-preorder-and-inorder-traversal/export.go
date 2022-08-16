package construct_binary_tree_from_preorder_and_inorder_traversal

func BuildTree(preorder []int, inorder []int) *TreeNode {
	return buildTree(preorder, inorder)
}
