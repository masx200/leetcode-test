package index

import (
	"testing"

	"github.com/datreeio/datree/pkg/utils"
	"gotest.tools/v3/assert"
)

func TestAbbreviateProduct(t *testing.T) {
	var input = [][]int{{1, 4}, {1000, 4000}, {2, 11}, {371, 375}, {10000, 10000}, {
		1,
		10000,
	}}
	var result []string = utils.MapSlice(input, func(a []int) string {
		return abbreviateProduct(a[0], a[1])
	})
	var expected = []string{
		"24e0",
		"45448...88768e753",
		"399168e2",
		"7219856259e3",
		"1e4",
		"28462...79008e2499",
	}
	assert.DeepEqual(t, expected, result)
}
