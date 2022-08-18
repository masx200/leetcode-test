package index

import "sort"

type WordFilter struct {
	d map[string]int
}
type Entry struct {
	Key   string
	Value int
}

func Constructor(words []string) WordFilter {

	m := map[string]int{}
	for i, word := range words {

		m[word] = i
	}

	entries := EntriesMap(m)
	sort.Slice(entries, func(i, j int) bool {

		return entries[i].Value < entries[j].Value
	})
	d := map[string]int{}
	for _, entry := range entries {
		word := entry.Key
		i := entry.Value
		n := len(word)
		for j := 1; j <= n; j++ {
			for k := 1; k <= n; k++ {
				d[word[:j]+","+word[n-k:]] = i
			}
		}
	}
	return WordFilter{d: d}
}

func EntriesMap(m map[string]int) []Entry {
	entries := []Entry{}
	for k, v := range m {
		entries = append(entries, Entry{Key: k, Value: v})
	}
	return entries
}

func (w *WordFilter) F(pref string, suff string) int {
	v, ok := w.d[pref+","+suff]
	if ok {
		return v
	} else {
		return -1
	}
}
