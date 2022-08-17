package largest_number

import (
	"sort"
	"strconv"
	"strings"
)

func largestNumber(nums []int) string {
	sort.Slice(nums, func(i, j int) bool {

		a := nums[i]
		b := nums[j]
		return -ParseInt(strconv.Itoa(a)+strconv.Itoa(b))+ParseInt(strconv.Itoa(b)+strconv.Itoa(a)) < 0
	})

	strs := MapSlice(nums, strconv.Itoa)
	if strs[0] == "0" {
		return "0"
	}
	return strings.Join(strs, "")
}
func MapSlice(vs []int, f func(int) string) []string {
	vsm := make([]string, len(vs))
	for i, v := range vs {
		vsm[i] = f(v)
	}
	return vsm
}

func ParseInt(s string) int {
	i, e := strconv.Atoi(s)
	if e != nil {
		panic(e)
	}
	return i
}
