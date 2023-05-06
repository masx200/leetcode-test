package tree_of_coprimes

var prime = make([][]bool, 0)

func getCoprimes(nums []int, edges [][]int) []int {
	var edge = make([][]int, len(nums))

	for i := range edge {
		edge[i] = make([]int, 0)
	}
	for _, e := range edges {
		a, b := e[0], e[1]
		edge[a] = append(edge[a], b)
		edge[b] = append(edge[b], a)
	}
	if len(prime) == 0 {
		for i := 0; i < 51; i++ {
			prime = append(prime, make([]bool, 51))
		}
		for i := 0; i < 51; i++ {
			for j := i; j < 51; j++ {
				prime[j][i] = Gcd(i, j) == 1
				prime[i][j] = prime[j][i]
			}
		}
	}

	var set = make(map[int]bool, 0)
	for _, n := range nums {
		set[n] = true
	}
	var visited = make(map[int]bool, 0)
	var currents = make([][][]int, 51)
	for i := 0; i < 51; i++ {
		currents[i] = make([][]int, 0)
	}

	var results = make([]int, len(nums))
	var dfs func(node, depth int)
	dfs = func(node, depth int) {
		if visited[node] {
			return
		}
		visited[node] = true
		var value = nums[node]
		var ans = []int{-1, -1}
		for i := range set {
			if len(currents[i]) > 0 && prime[value][i] {
				var get = currents[i][len(currents[i])-1]
				if get[1] > ans[1] {
					ans = get
				}
			}
		}
		results[node] = ans[0]

		for _, child := range edge[node] {
			currents[value] = append(currents[value], []int{node, depth})

			dfs(child, depth+1)
			currents[value] = currents[value][0 : len(currents[value])-1]
		}
	}
	dfs(0, 0)

	return results
}

func Gcd(a int, b int) int {
	for b != 0 {
		return Gcd(b, a%b)
	}
	return a
}
