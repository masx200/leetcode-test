package binary_search_tree_iterator

import (
	"testing"

	"github.com/masx200/leetcode-test/utils"
	"gotest.tools/v3/assert"
)

var TreeNodeLeetCodeParse = utils.TreeNodeLeetCodeParse

func TestBSTIterator(t *testing.T) {
	iterator := Constructor(TreeNodeLeetCodeParse("[7, 3, 15, null, null, 9, 20]"))
	res := []int{}
	for iterator.HasNext() {
		res = append(res, iterator.Next())
	}
	assert.DeepEqual(t, res, []int{3, 7, 9, 15, 20})
}
