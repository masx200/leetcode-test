package design_circular_deque

import "errors"

type MyCircularDeque struct {
	capacity int
	deque    []int
}

func Constructor(capacity int) MyCircularDeque {
	if capacity < 1 {
		panic(errors.New("k greater than or equal  one"))
	}
	return MyCircularDeque{capacity: capacity}
}

func (d *MyCircularDeque) InsertFront(value int) bool {
	if d.IsFull() {
		return false
	}
	d.deque = append([]int{value}, d.deque...)
	return true
}

func (d *MyCircularDeque) InsertLast(value int) bool {
	if d.IsFull() {
		return false
	}
	d.deque = append(d.deque, value)
	return true
}

func (d *MyCircularDeque) DeleteFront() bool {
	if d.IsEmpty() {
		return false
	}
	d.deque = d.deque[1:]
	return true
}

func (d *MyCircularDeque) DeleteLast() bool {
	if d.IsEmpty() {
		return false
	}
	d.deque = d.deque[:len(d.deque)-1]
	return true
}

func (d *MyCircularDeque) GetFront() int {
	if d.IsEmpty() {
		return -1
	}
	return d.deque[0]
}

func (d *MyCircularDeque) GetRear() int {
	if d.IsEmpty() {
		return -1
	}
	return d.deque[len(d.deque)-1]
}

func (d *MyCircularDeque) IsEmpty() bool {
	return len(d.deque) == 0
}

func (d *MyCircularDeque) IsFull() bool {
	return len(d.deque) >= d.capacity
}
