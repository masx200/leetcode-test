package first_missing_positive

import "sort"

func firstMissingPositive(nums []int) int {
	sort.Ints(nums)
	re := 1
	for i := 0; i < len(nums); i++ {
		if nums[i] == re {
			re++
		}
	}
	return re
}
