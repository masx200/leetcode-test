package maximum_product_difference_between_two_pairs

import "sort"

func maxProductDifference(a []int) int {
	sort.Ints(a)
	n := len(a)
	return a[n-1]*a[n-2] - a[0]*a[1]
}
