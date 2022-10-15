package possible_bipartition

type UnionFind struct {
	parents, sizes map[int]int
}

func (u UnionFind) Size(x int) int {

	v, o := u.sizes[x]
	if o {
		return v
	} else {
		return 1
	}
}
func NewUnionFind() UnionFind {
	parent := map[int]int{}

	return UnionFind{parents: parent, sizes: map[int]int{}}
}

func (u UnionFind) Find(x int) int {
	_, o := u.parents[x]
	if !o {
		u.parents[x] = x
	}
	if u.parents[x] != x {
		u.parents[x] = u.Find(u.parents[x])
	}
	return u.parents[x]
}

func (u UnionFind) Union(x, y int) {
	x, y = u.Find(x), u.Find(y)
	if x == y {
		return
	}

	u.sizes[x] = u.Size(x)
	u.sizes[y] = u.Size(y)

	if u.sizes[x] > u.sizes[y] {
		u.parents[y] = x
		u.sizes[x] = u.sizes[x] + u.sizes[y]
	} else {
		u.parents[x] = y
		u.sizes[y] = u.sizes[x] + u.sizes[y]
	}
}

func (u UnionFind) Connected(x, y int) bool {
	return u.Find(x) == u.Find(y)
}
