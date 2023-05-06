package deepest_leaves_sum

import serialize_and_deserialize_binary_tree "github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree"

type TreeNode = serialize_and_deserialize_binary_tree.TreeNode

func deepestLeavesSum(root *TreeNode) (sum int) {
	q := []*TreeNode{root}
	for len(q) > 0 {
		sum = 0

		temp := []*TreeNode{}
		for _, node := range q {

			sum += node.Val
			if node.Left != nil {
				temp = append(temp, node.Left)
			}
			if node.Right != nil {
				temp = append(temp, node.Right)
			}
		}
		q = temp
	}
	return
}
