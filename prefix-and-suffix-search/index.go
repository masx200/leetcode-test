package index

type WordFilter struct {
	d map[string]int
}

func Constructor(words []string) WordFilter {
	mp := map[string]int{}
	for i, word := range words {
		n := len(word)
		for j := 1; j <= n; j++ {
			for k := 1; k <= n; k++ {
				mp[word[:j]+","+word[n-k:]] = i
			}
		}
	}
	return WordFilter{d: mp}
}

func (w *WordFilter) F(pref string, suff string) int {
	v, ok := w.d[pref+","+suff]
	if ok {
		return v
	} else {
		return -1
	}
}
