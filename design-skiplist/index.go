package index

type Skiplist struct {
	store map[int]int
}

func Constructor() Skiplist {
	return Skiplist{store: make(map[int]int)}
}

func (s *Skiplist) Search(target int) bool {
	var v, ok = s.store[target]
	return ok && v > 0
}

func (s *Skiplist) Add(target int) {
	s.store[target]++
}

func (s *Skiplist) Erase(target int) bool {
	var v, ok = s.store[target]
	if ok && v > 0 {
		if v == 1 {
			delete(s.store, target)
			return true
		}
		s.store[target]--

		return true
	} else {
		return false
	}
}
