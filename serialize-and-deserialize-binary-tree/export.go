package serialize_and_deserialize_binary_tree

func Serialize(root *TreeNode) string {
	ser := Constructor()
	result := ser.serialize(root)
	return result
}
func Deserialize(data string) *TreeNode {
	ser := Constructor()
	ans := ser.deserialize(data)
	return ans
}
