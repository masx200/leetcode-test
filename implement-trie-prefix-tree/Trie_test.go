package implement_trie_prefix_tree

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestTrie(t *testing.T) {
	var assertEquals = func(got, want interface{}) {
		assert.Equal(t, got, want)
	}
	var trie = Constructor()
	trie.Insert("apple")
	assertEquals(true, trie.Search("apple"))   // 返回 True
	assertEquals(false, trie.Search("app"))    // 返回 False
	assertEquals(true, trie.StartsWith("app")) // 返回 True
	trie.Insert("app")
	assertEquals(true, trie.Search("app"))
	assertEquals(true, trie.StartsWith("ap"))       // 返回 True
	assertEquals(true, trie.StartsWith("app"))      // 返回 True
	assertEquals(false, trie.StartsWith("annnnpp")) // 返回 True
}
