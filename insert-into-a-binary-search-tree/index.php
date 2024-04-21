class Solution
{
    // 递归函数，返回构造后 BST 的根节点
    public function insertIntoBST($root, $val)
    {
        if ($root === null) return new TreeNode($val);

        if ($val < $root->val) {
            $root->left = $this->insertIntoBST($root->left, $val);
        } else {
            $root->right = $this->insertIntoBST($root->right, $val);
        }

        return $root;
    }
}