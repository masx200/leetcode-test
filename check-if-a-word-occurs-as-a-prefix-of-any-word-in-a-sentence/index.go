package index

import "strings"

func isPrefixOfWord(sentence string, searchWord string) int {
	var index = FindIndex(strings.Split(sentence, " "), func(el string) bool {
		return strings.HasPrefix(el, searchWord)
	})
	if index < 0 {
		return index
	} else {
		return index + 1
	}
}

//func FindIndex[S ~[]T, T any](items S, f func(el T) bool) int {
func FindIndex(items []string, f func(el string) bool) int {
	for i, el := range items {
		if f(el) {
			return i
		}
	}
	return -1
}
