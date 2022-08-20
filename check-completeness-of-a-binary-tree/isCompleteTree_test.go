package check_completeness_of_a_binary_tree

import (
	"github.com/akrennmair/slice"
	"github.com/masx200/leetcode-test/utils"
	"gotest.tools/v3/assert"
	"testing"
)

var deserialize = utils.TreeNodeLeetCodeParse

func TestIsCompleteTree(t *testing.T) {
	var inputs = []string{
		"[1,2,3,4,5,6]",
		"[1,2,3,4,5,null,7]",
		"[1,2,3,5,null,7,8]",
		"[1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,15]",
		"[1,2,3,4,5,6]",
		"[1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,15]",
	}
	var outputs = []bool{true, false, false, false, true, false}
	assert.DeepEqual(t, slice.Map(inputs, func(input string) bool {

		return IsCompleteTree(deserialize(input))
	}), outputs)
}
