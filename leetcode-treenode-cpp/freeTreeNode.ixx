module;

export module leetcode_treenode_cpp.freeTreeNode;
import leetcode_treenode_cpp.TreeNode;

namespace leetcode_treenode_cpp {
export void freeTreeNode(TreeNode* root)
{

    if (root == nullptr) {

        return;
    }

    freeTreeNode(root->left);
    freeTreeNode(root->right);
    delete root;
}

}
