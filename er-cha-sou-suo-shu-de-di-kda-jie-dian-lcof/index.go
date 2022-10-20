package er_cha_sou_suo_shu_de_di_kda_jie_dian_lcof

import (
	"context"
	"errors"

	serialize_and_deserialize_binary_tree "github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree"
)

func KthLargest(root *TreeNode, k int) int {
	return kthLargest(root, k)
}

type TreeNode = serialize_and_deserialize_binary_tree.TreeNode

func kthLargest(root *TreeNode, k int) int {
	i := 1
	ctx, cancel := context.WithCancel(context.Background())
	gen := ReverseInOrderIterator(ctx, root)
	defer cancel()
	for v := range gen {

		if i == k {
			return v
		}
		i++
	}
	panic(errors.New("unreachable"))
}
func ReverseInOrderIterator(ctx context.Context, root *TreeNode) (gen chan int) {
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

		YieldAll(ctx, gen, ReverseInOrderIterator(ctx, root.Right))
		YieldOne(
			ctx, gen, root.Val)

		YieldAll(ctx, gen, ReverseInOrderIterator(ctx, root.Left))

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
