package reverse_prefix_of_word


import "strings"
import "github.com/webx-top/com"

func reversePrefix(word string, ch byte) string {
	index := strings.IndexByte(word, ch)
	if index < 0 {
		return word
	}

	return com.Reverse(word[0:index+1]) + string(word[index+1:])
}
