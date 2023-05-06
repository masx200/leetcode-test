package check_if_a_word_occurs_as_a_prefix_of_any_word_in_a_sentence

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
