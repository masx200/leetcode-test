package implement_trie_prefix_tree

type Trie struct {
	Prefix   string
	IsEnd    bool
	Children map[string]*Trie
	words    map[string]bool
}

func Constructor() Trie {
	return Trie{
		words: make(map[string]bool),

		Children: make(map[string]*Trie)}
}

func (t *Trie) Insert(word string) {
	t.words[word] = true
	if t.Prefix == "" && !t.IsEnd {
		t.Prefix = word
		t.IsEnd = true
		return
	}
	if t.Prefix == word {
		t.IsEnd = true
		return
	}
	prefixLen := CommonPrefixLen(t.Prefix, word)
	if len(t.Prefix) > prefixLen {
		t.split(prefixLen)
	}

	if len(word) > prefixLen {
		kid := t.findOrCreateKid(word[prefixLen : prefixLen+1])
		kid.Insert(word[prefixLen+1:])
	} else {
		t.IsEnd = true
	}
}
func (node *Trie) findOrCreateKid(char string) *Trie {
	kid, ok := node.Children[char]
	if ok {
		return kid
	}
	kidn := Constructor()

	node.Children[char] = &kidn
	return &kidn
}
func (node *Trie) split(n int) {

	node.Children = map[string]*Trie{}
	var kidn = Constructor()
	var ntn = &kidn
	ntn.Prefix = node.Prefix[n+1:]
	ntn.Children = node.Children
	ntn.IsEnd = node.IsEnd
	node.Children[node.Prefix[n:n+1]] = ntn
	node.Prefix = node.Prefix[:n]
	node.IsEnd = false

}

func (t *Trie) Search(word string) bool {
	return t.words[word]
}

func (t *Trie) StartsWith(prefix string) bool {
	var has = t.words[prefix]
	if has {
		return true
	}
	//  fmt.Println(t.Prefix,t.IsEnd,t.Children,t.words)
	//   fmt.Println(prefix)
	if len(prefix) == 0 {
		return true
	}
	if t.Prefix == prefix {
		return true
	}

	n := CommonPrefixLen(t.Prefix, prefix)
	if n == len(t.Prefix) {
		kid, found := t.Children[prefix[n:n+1]]
		if found {
			return kid.StartsWith(prefix[n+1:])

		}
	}
	if n == len(prefix) {
		return true
	}
	return false
}
func CommonPrefixLen(s1, s2 string) int {
	n1, n2 := len(s1), len(s2)
	i := 0
	for ; i < n1 && i < n2; i++ {
		if s1[i] != s2[i] {
			break
		}
	}
	return i
}
