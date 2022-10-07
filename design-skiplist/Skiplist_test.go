package index

import "testing"
import "gotest.tools/v3/assert"

func TestSkiplist(t *testing.T) {
	skiplist := Constructor()
	skiplist.Add(1)
	skiplist.Add(2)
	skiplist.Add(3)
	assert.Equal(t, false, skiplist.Search(0)) // 返回 false
	skiplist.Add(4)
	assert.Equal(t, true, skiplist.Search(1))  // 返回 true
	assert.Equal(t, false, skiplist.Erase(0))  // 返回 false，0 不在跳表中
	assert.Equal(t, true, skiplist.Erase(1))   // 返回 true
	assert.Equal(t, false, skiplist.Search(1)) // 返回 false，1 已被擦除
	skiplist.Add(4)
	skiplist.Add(4)
	assert.Equal(t,true, skiplist.Erase(4))
	assert.Equal(t,true, skiplist.Search(4))
}
