package binary_search_tree_iterator

import (
	"context"
	serialize_and_deserialize_binary_tree "github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree"
	"runtime"
)

type TreeNode = serialize_and_deserialize_binary_tree.TreeNode

type BSTIterator struct {
	generator chan int
	value     int
	done      bool
}

func Constructor(root *TreeNode) BSTIterator {
	ctx, cancel := context.WithCancel(context.Background())
	gen := InOrderIterator(ctx, root)

	value, done := <-gen
	bstiterator := BSTIterator{generator: gen, value: value, done: done}
	runtime.SetFinalizer(&bstiterator, func(_ *BSTIterator) { cancel() })
	return bstiterator
}

func (b *BSTIterator) Next() int {
	val := b.value
	b.value, b.done = <-b.generator
	return val
}

func (b *BSTIterator) HasNext() bool {
	return b.done
}

func InOrderIterator(ctx context.Context, root *TreeNode) (gen chan int) {
	gen = make(chan int)

	go func() {

		defer close(gen)
		if root == nil {

			return
		}

		select {
		case <-ctx.Done():
			return
		default:
			{
			}
		}

		YieldAll(ctx, gen, InOrderIterator(ctx, root.Left))
		YieldOne(
			ctx, gen, root.Val)

		YieldAll(ctx, gen, InOrderIterator(ctx, root.Right))

	}()

	return
}
func YieldAll(ctx context.Context, target chan int, source chan int) {

	for v := range source {
		YieldOne(
			ctx, target, v)

	}
}
func YieldOne(ctx context.Context, target chan int, source int) {

	select {
	case <-ctx.Done():
		return
	default:
		target <- source
	}

}
