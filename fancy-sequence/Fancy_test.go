package fancy_sequence

import (
	"testing"

	"gotest.tools/v3/assert"
)

func TestFancy(t *testing.T) {
	var fancy = Constructor()
	fancy.Append(2)                        // 奇妙序列：[2]
	fancy.AddAll(3)                        // 奇妙序列：[2+3] -> [5]
	fancy.Append(7)                        // 奇妙序列：[5, 7]
	fancy.MultAll(2)                       // 奇妙序列：[5*2, 7*2] -> [10, 14]
	assert.Equal(t, 10, fancy.GetIndex(0)) // 返回 10
	fancy.AddAll(3)                        // 奇妙序列：[10+3, 14+3] -> [13, 17]
	fancy.Append(10)                       // 奇妙序列：[13, 17, 10]
	fancy.MultAll(2)                       // 奇妙序列：[13*2, 17*2, 10*2] -> [26, 34, 20]
	assert.Equal(t, 26, fancy.GetIndex(0)) // 返回 26
	assert.Equal(t, 34, fancy.GetIndex(1)) // 返回 34
	assert.Equal(t, 20, fancy.GetIndex(2)) // 返回 20

}
