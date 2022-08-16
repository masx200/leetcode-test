package first_missing_positive

import "sort"

func firstMissingPositive(nums []int) int {

	var temp = []int{}

	for _, v := range nums {
		if v > 0 && v <= len(nums) {
			temp = append(temp, v)
		}
	}
	nums = temp
	sort.Ints(nums)
	re := 1
	for i := 0; i < len(nums); i++ {
		if nums[i] == re {
			re++
		}
	}
	return re
}
