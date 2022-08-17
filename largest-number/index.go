package largest_number

import (
	"sort"
	"strconv"
	"strings"
)

func largestNumber(nums []int) string {
	strs := MapSlice(nums, strconv.Itoa)
	sort.Slice(strs, func(i, j int) bool {

		a := strs[i]
		b := strs[j]
		return -ParseInt((a)+(b))+ParseInt((b)+(a)) < 0
	})

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
