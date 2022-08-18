package index

import "strings"

func prefixCount(words []string, pref string) int {
	return ReduceSlice(words, func(a int, v string) int {
		if strings.HasPrefix(v, pref) {
			return a + 1
		}
		return a
	}, 0)
}

func ReduceSlice(s []string, c func(a int, v string) int, i int) int {

	for _, v := range s {
		i = c(i, v)
	}
	return i
}
