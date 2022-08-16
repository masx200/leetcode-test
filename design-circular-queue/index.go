package design_circular_queue

import "errors"

type MyCircularQueue struct {
	capacity int
	queue    []int
}

func Constructor(capacity int) MyCircularQueue {
	if capacity < 1 {
		panic(errors.New("k greater than or equal  one"))
	}
	return MyCircularQueue{capacity: capacity}
}

func (d *MyCircularQueue) EnQueue(value int) bool {
	if d.IsFull() {
		return false
	}
	d.queue = append(d.queue, value)
	return true
}

func (d *MyCircularQueue) DeQueue() bool {
	if d.IsEmpty() {
		return false
	}
	d.queue = d.queue[1:]
	return true
}

func (d *MyCircularQueue) Front() int {
	if d.IsEmpty() {
		return -1
	}
	return d.queue[0]
}

func (d *MyCircularQueue) Rear() int {
	if d.IsEmpty() {
		return -1
	}
	return d.queue[len(d.queue)-1]
}

func (d *MyCircularQueue) IsEmpty() bool {
	return len(d.queue) == 0
}

func (d *MyCircularQueue) IsFull() bool {
	return len(d.queue) >= d.capacity
}
