package min_cost_to_connect_all_points

import "math"

func minCostConnectPoints(points [][]int) int {

	p0 := points[0]

	ds := map[int]int{}

	for i, p := range points {
		ds[i] = 曼哈顿距离(p0, p)
	}
	delete(ds, 0)

	ans := 0

	for len(ds) != 0 {

		mi := 0
		md := math.MaxInt
		p1 := []int{}
		for i, d := range ds {
			p := points[i]

			if d < md {
				mi = i
				p1 = p
				md = d

			}

		}
		delete(ds, mi)

		ans += md
		for i, d := range ds {
			p := points[i]
			ds[i] = min(d, 曼哈顿距离(p, p1))
		}
	}
	return ans
}
func 曼哈顿距离(a []int, b []int) int {

	return abs(a[0]-b[0]) + abs(a[1]-b[1])
}

func abs(x int) int {
	if x >= 0 {
		return x
	}
	return x * -1
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
