package maximum_binary_tree

import (
	"strings"
	"testing"

	"github.com/magiconair/properties/assert"
	"github.com/masx200/leetcode-test/utils"
)

var SerializeBinaryTree = utils.TreeNodeLeetCodeStringify

func TestConstructMaximumBinaryTree(t *testing.T) {
	var inputs = [][]int{
		{3, 2, 1, 6, 0, 5},
		{3, 2, 1},
	}
	var outputs = []string{
		"[6, 3, 5, null, 2, 0, null, null, 1]",
		"[3, null, 2, null, 1]",
	}

	for i := 0; i < len(inputs); i++ {
		var result = constructMaximumBinaryTree(inputs[i])
		var output = strings.ReplaceAll(outputs[i], " ", "")
		var serialized = SerializeBinaryTree(result)
		assert.Equal(t, output, serialized)
	}
}
