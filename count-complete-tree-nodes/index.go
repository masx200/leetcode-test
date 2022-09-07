package index

import "math"

func countNodes(root *TreeNode) int {
	return countNodesDepth(root, -1, -1)
}

func countNodesDepth(root *TreeNode, leftDepth int, rightDepth int) int {
	if root == nil {
		return 0
	}

	var left = 0

	var right = 0

	var curNode = root

	if leftDepth > 0 {

		left = leftDepth
	} else {

		for curNode != nil {

			left++
			curNode = curNode.Left
		}

	}
	curNode = root

	if rightDepth > 0 {

		right = rightDepth
	} else {

		for curNode != nil {

			right++
			curNode = curNode.Right
		}

	}

	if left == right {

		return int(math.Pow(2, float64(left))) - 1
	}

	return (1 + countNodesDepth(root.Left, left-1, -1) + countNodesDepth(root.Right, -1, right-1))

}
