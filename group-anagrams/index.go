package group_anagrams

import (
	"sort"
	"strings"
)

func groupAnagrams(strs []string) [][]string {
	mp := map[string][]string{}
	for _, str := range strs {
		slice := strings.Split(str, "")
		sort.Strings(slice)
		cnt := strings.Join(slice, "")
		mp[cnt] = append(mp[cnt], str)
	}
	ans := make([][]string, 0, len(mp))
	for _, v := range mp {
		ans = append(ans, v)
	}
	return ans
}
