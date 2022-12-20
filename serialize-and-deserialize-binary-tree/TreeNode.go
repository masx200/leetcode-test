package index

type TreeNodeInterFace interface {
	GetVal() int
	SetVal(int)
	GetLeft() TreeNodeInterFace
	SetLeft(TreeNodeInterFace)
	GetRight() TreeNodeInterFace
	SetRight(TreeNodeInterFace)
}

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func (t *TreeNode) GetVal() int {
	return t.Val
}
func (t *TreeNode) SetVal(val int) {

	t.Val = val
}
func (t *TreeNode) GetLeft() TreeNodeInterFace {

	return t.Left
}
func (t *TreeNode) SetLeft(n TreeNodeInterFace) {
	if n == nil {
		t.Left = nil
		return
	}
	new := TreeNodeInterFaceToStruct(n)
	t.Left = new
}
func (t *TreeNode) GetRight() TreeNodeInterFace {
	return t.Right
}
func (t *TreeNode) SetRight(n TreeNodeInterFace) {

	if n == nil {
		t.Right = nil
		return
	}
	new := TreeNodeInterFaceToStruct(n)
	t.Right = new
}

func TreeNodeInterFaceToStruct(n TreeNodeInterFace) *TreeNode {
	new := &TreeNode{Val: n.GetVal()}

	new.SetLeft(n.GetLeft())

	new.SetRight(n.GetRight())
	return new
}
