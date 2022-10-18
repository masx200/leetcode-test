package er_cha_sou_suo_shu_de_di_kda_jie_dian_lcof

import serialize_and_deserialize_binary_tree "github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree"

import (
	"errors"
)

func KthLargest(root *TreeNode, k int) int {
	return kthLargest(root, k)
}

type TreeNode = serialize_and_deserialize_binary_tree.TreeNode

func kthLargest(root *TreeNode, k int) int {
	i := 1
	gen := ReverseInOrderIterator(root)

	for v := range gen {

		if i == k {
			return v
		}
		i++
	}
	panic(errors.New("unreachable"))
}
func ReverseInOrderIterator(root *TreeNode) (gen chan int) {
	gen = make(chan int)

	if root == nil {
		close(gen)
		return
	}
	go func() {
		WriteAll(gen, ReverseInOrderIterator(root.Right))

		gen <- root.Val
		WriteAll(gen, ReverseInOrderIterator(root.Left))
		close(gen)
	}()

	return
}
func WriteAll(target chan int, source chan int) {

	for v := range source {
		target <- v
	}
}
