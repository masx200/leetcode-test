package design_circular_queue

import (
	"testing"

	"gotest.tools/v3/assert"
)

func TestMyCircularQueue(t *testing.T) {

	var results = []any{}
	var circularQueue = Constructor(3)                    // 设置长度为 3
	results = append(results, (circularQueue.EnQueue(1))) // 返回 true
	results = append(results, (circularQueue.EnQueue(2))) // 返回 true
	results = append(results, (circularQueue.EnQueue(3))) // 返回 true
	results = append(results, (circularQueue.EnQueue(4))) // 返回 false，队列已满
	results = append(results, (circularQueue.Rear()))     // 返回 3
	results = append(results, (circularQueue.IsFull()))   // 返回 true
	results = append(results, (circularQueue.DeQueue()))  // 返回 true
	results = append(results, (circularQueue.EnQueue(4))) // 返回 true
	results = append(results, (circularQueue.Rear()))     // 返回 4
	assert.DeepEqual(t, results, []any{true, true, true, false, 3, true, true, true, 4})
}
