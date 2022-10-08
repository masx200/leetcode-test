package reveal_cards_in_increasing_order

import "sort"

func deckRevealedIncreasing(deck []int) []int {

	if len(deck) == 0 {
		return deck
	}

	sort.Sort(sort.Reverse(sort.IntSlice(deck)))

	queue := []int{}

	for i, d := range deck {
		// queue = append([]int{d}, queue...)
		queue = append(queue, d)
		if i != len(deck)-1 {
			queue = append(queue, queue[0])
			queue = queue[1:]
			// queue = append([]int{queue[len(queue)-1]}, queue...)
			// queue = queue[:len(queue)-1]
		}
	}

	return Reverse(queue)
}

// func Reverse[T any](collection []T) []T {
func Reverse(collection []int) []int {
	length := len(collection)
	half := length / 2

	for i := 0; i < half; i = i + 1 {
		j := length - 1 - i
		collection[i], collection[j] = collection[j], collection[i]
	}

	return collection
}
