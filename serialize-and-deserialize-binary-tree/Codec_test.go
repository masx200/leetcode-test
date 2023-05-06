package serialize_and_deserialize_binary_tree

import (
	"testing"
)
import "gotest.tools/v3/assert"

func TestCodec(t *testing.T) {

	var encoded = []string{"[1,[2,null,null],[3,[4,null,null],[5,null,null]]]", "null", "[1,null,null]", "[1,[2,null,null],null]"}
	var decoded = []*TreeNode{

		{Val: 1, Left: &TreeNode{Val: 2, Left: nil, Right: nil}, Right: &TreeNode{Val: 3, Left: &TreeNode{Val: 4, Left: nil, Right: nil}, Right: &TreeNode{Val: 5, Left: nil, Right: nil}}},
		nil,
		{Val: 1, Left: nil, Right: nil},
		{Val: 1, Left: &TreeNode{Val: 2, Left: nil, Right: nil}, Right: nil}}
	for index, data := range encoded {
		ser := Constructor()
		deser := Constructor()

		ans := deser.deserialize(data)
		result := ser.serialize(ans)
		assert.Assert(t, result == data)
		assert.DeepEqual(t, ans, decoded[index])
	}

}
