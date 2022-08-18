package implement_trie_prefix_tree

type Trie struct {
	children map[rune]*Trie
	isEnd    bool

	words map[string]bool
}

func Constructor() Trie {
	return Trie{children: make(map[rune]*Trie),
		words: make(map[string]bool)}
}

func (t *Trie) Insert(word string) {

	t.words[word] = true
	node := t
	for _, ch := range word {

		if node.children[ch] == nil {
			var nt = Constructor()
			node.children[ch] = &nt
		}
		node = node.children[ch]
	}
	node.isEnd = true
}

func (t *Trie) SearchPrefix(prefix string) *Trie {
	node := t
	for _, ch := range prefix {

		if node.children[ch] == nil {
			return nil
		}
		node = node.children[ch]
	}
	return node
}

func (t *Trie) Search(word string) bool {
	return t.words[word]
}

func (t *Trie) StartsWith(prefix string) bool {

	if t.words[prefix] {

		return true
	}
	return t.SearchPrefix(prefix) != nil
}
