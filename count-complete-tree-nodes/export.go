package index
import serialize_and_deserialize_binary_tree "github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree"

func CountNodes(root *TreeNode) int {
	return countNodes(root)
}
type TreeNode = serialize_and_deserialize_binary_tree.TreeNode