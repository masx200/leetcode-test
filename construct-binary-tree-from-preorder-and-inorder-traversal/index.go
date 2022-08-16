package construct_binary_tree_from_preorder_and_inorder_traversal

import serialize_and_deserialize_binary_tree "github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree"

type TreeNode = serialize_and_deserialize_binary_tree.TreeNode

func buildTree(preorder []int, inorder []int) *TreeNode {
	if len(preorder) == 0 {
		return nil
	}

	i := 0
	for ; i < len(inorder); i++ {
		if inorder[i] == preorder[0] {
			break
		}
	}
	root := &TreeNode{Val: preorder[0], Left: buildTree(preorder[1:i+1], inorder[:i]), Right: buildTree(preorder[i+1:], inorder[i+1:])}

	return root
}
