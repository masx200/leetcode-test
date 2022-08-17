package largest_number

import (
	"testing"

	"gotest.tools/v3/assert"
)

func TestLargestNumber(t *testing.T) {

	assert.Equal(t, largestNumber([]int{10, 2}), "210")
	assert.Equal(t, largestNumber([]int{3, 30, 34, 5, 9}), "9534330")
	assert.Equal(t, largestNumber([]int{3, 30, 34, 5, 9, 10, 22222, 333333, 444555, 777}), "97775444555343333333302222210")
}
