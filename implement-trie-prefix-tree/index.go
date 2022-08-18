package implement_trie_prefix_tree

type PrefixTree struct {
	isEnd    bool
	children map[byte]*PrefixTree
	rest     string
}
type Trie struct {
	root *PrefixTree
}

func Constructor() Trie {

	return Trie{root: &PrefixTree{children: make(map[byte]*PrefixTree)}}
}

func (this *Trie) Insert(word string) {

}

func (this *Trie) Search(word string) bool {

}

func (this *Trie) StartsWith(prefix string) bool {

}
