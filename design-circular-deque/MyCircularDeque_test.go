package design_circular_deque

import (
	"testing"

	"gotest.tools/v3/assert"
)

func TestMyCircularDeque(t *testing.T) {

	var results = []any{}
	var circularQueue = Constructor(3)                        // 设置长度为 3
	results = append(results, (circularQueue.InsertLast(1)))  // 返回 true
	results = append(results, (circularQueue.InsertLast(2)))  // 返回 true
	results = append(results, (circularQueue.InsertFront(3))) // 返回 true
	results = append(results, (circularQueue.InsertFront(4))) // 返回 false，队列已满
	results = append(results, (circularQueue.GetRear()))      // 返回 3
	results = append(results, (circularQueue.IsFull()))       // 返回 true
	results = append(results, (circularQueue.DeleteLast()))   // 返回 true
	results = append(results, (circularQueue.InsertFront(4))) // 返回 true
	results = append(results, (circularQueue.GetFront()))     // 返回 4
	assert.DeepEqual(t, results, []any{true, true, true, false, 2, true, true, true, 4})
}
