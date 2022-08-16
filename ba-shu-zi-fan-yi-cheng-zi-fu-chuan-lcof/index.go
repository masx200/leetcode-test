package ba_shu_zi_fan_yi_cheng_zi_fu_chuan_lcof

import "strconv"

func translateNum(num int) int {
	var s = strconv.Itoa(num)
	var n = len(s)
	var dp = []int{1, 1}
	for i := 2; i < n+1; i++ {
		var o, e = strconv.Atoi(s[i-2 : i])
		if e != nil {
			panic(e)
		}
		dp = append(dp, dp[1]+Btoi(9 < o && o < 26)*dp[0])
		dp = dp[1:]
	}
	return dp[1]
}
func Btoi(b bool) int {
	if b {
		return 1
	}
	return 0
}
