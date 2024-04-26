package kth_ancestor_of_a_tree_node

import "math"

type TreeAncestor struct {
	n      int
	parent []int
	cache  map[int]map[int]int
}

func Constructor(n int, parent []int) TreeAncestor {
	return TreeAncestor{n, parent, make(map[int]map[int]int)}
}

func (this *TreeAncestor) GetKthAncestor(node int, k int) int {
	// fmt.Println(node,k)
	//  fmt.Println(this.cache)
	if _, ok := this.cache[node]; !ok {
		this.cache[node] = make(map[int]int)
	}
	var m = this.cache[node]
	//  fmt.Println(m)
	if val, ok := m[k]; ok {
		return val
	}

	if node == 0 {
		return -1
	}
	if node == -1 {
		return -1
	}
	if k == 0 {
		return node
	}
	if k == 1 {
		return this.parent[node]
	}
	even := 1 << uint(math.Floor(math.Log2(float64(k))))
	half := even
	if even == k {
		half = even >> 1
	}
	res := this.GetKthAncestor(this.GetKthAncestor(node, half), k-half)
	m[k] = res
	return res
}
