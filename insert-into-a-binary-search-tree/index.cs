public class Solution {
    public TreeNode InsertIntoBST(TreeNode root, int val) {


        if (root == null) // 如果当前节点为空，也就意味着val找到了合适的位置，此时创建节点直接返回。
            return new TreeNode(val);
        if (root.val < val){
            root.right = InsertIntoBST(root.right, val); // 递归创建右子树
        }else if (root.val > val){
            root.left = InsertIntoBST(root.left, val); // 递归创建左子树
        }
        return root;
    }
}