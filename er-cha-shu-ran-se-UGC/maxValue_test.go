package er_cha_shu_ran_se_ugc

import (
	"testing"

	"gotest.tools/v3/assert"
)
import "github.com/masx200/leetcode-test/utils"

var TreeNodeLeetCodeParse = utils.TreeNodeLeetCodeParse

func TestMaxValue(t *testing.T) {
	var assertEquals = func(a, b any) {
		assert.Equal(t, a, b)
	}
	assertEquals(12, maxValue(TreeNodeLeetCodeParse("[5, 2, 3, 4]"), 2))
	assertEquals(
		16,
		maxValue(TreeNodeLeetCodeParse("[4, 1, 3, 9, null, null, 2]"), 2),
	)
}
