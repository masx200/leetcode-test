package index

import (
	"testing"

	"gotest.tools/v3/assert"
)
import "github.com/masx200/leetcode-test/utils"

func TestDeepestLeavesSum(t *testing.T) {
	var inputs = []string{
		"[1,2,3,4,5,null,6,7,null,null,null,null,8]",
		"[6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]",
	}
	var outputs = []int{15, 19}

	for i, s := range inputs {
		assert.Equal(t, outputs[i], deepestLeavesSum(utils.TreeNodeLeetCodeParse(s)))
	}
}
