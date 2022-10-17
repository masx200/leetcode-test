package er_cha_shu_ran_se_ugc

import (
	"math"

	sadbt "github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree"
)

type TreeNode = sadbt.TreeNode

func maxValue(root *TreeNode, k int) int {
	return Max(dfs(root, k)...)
}

func dfs(root *TreeNode, k int) []int {
	ans := make([]int, k+1)
	if root == nil {
		return ans
	}

	left := dfs(root.Left, k)
	right := dfs(root.Right, k)
	for i := range ans {
		ans[i] = left[k] + right[k]
	}

	for i := 1; i <= k; i++ {
		temp := math.MinInt
		for j := 0; j <= i-1; j++ {
			temp = Max(temp, left[j]+right[i-1-j])
		}
		ans[i] = Max(ans[i], temp+root.Val)
	}
	return ans
}
func Max(values ...int) int {

	value := math.MinInt

	for _, v := range values {
		if value < v {
			value = v
		}
	}
	return value
}
