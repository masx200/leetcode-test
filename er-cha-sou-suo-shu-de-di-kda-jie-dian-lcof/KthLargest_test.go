package er_cha_sou_suo_shu_de_di_kda_jie_dian_lcof

import (
	"testing"

	"github.com/masx200/leetcode-test/utils"
	"gotest.tools/v3/assert"
)

var TreeNodeLeetCodeParse = utils.TreeNodeLeetCodeParse

func TestKthLargest(t *testing.T) {
	assert.Equal(t, 4, (kthLargest(TreeNodeLeetCodeParse("[3,1,4,null,2]"), 1)))
	assert.Equal(t, 4, (kthLargest(TreeNodeLeetCodeParse(" [5,3,6,2,4,null,null,1]"), 3)))
}
