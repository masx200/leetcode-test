class Solution {
    func insertIntoBST(_ root: TreeNode?, _ val: Int) -> TreeNode? {
        if root == nil{return TreeNode(val)}
        if val<root!.val{
            root?.left=insertIntoBST(root?.left, val)
        }else{
            root?.right=insertIntoBST(root?.right, val)
        }
        return root
    }
}