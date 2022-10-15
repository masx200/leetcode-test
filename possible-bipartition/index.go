package possible_bipartition

func possibleBipartition(n int, dislikes [][]int) bool {
	g := make([][]int, n)
	for _, d := range dislikes {
		x, y := d[0]-1, d[1]-1
		g[x] = append(g[x], y)
		g[y] = append(g[y], x)
	}
	uf := NewUnionFind()
	for x, nodes := range g {
		for _, y := range nodes {
			uf.Union(nodes[0], y)
			if uf.Connected(x, y) {
				return false
			}
		}
	}
	return true
}
