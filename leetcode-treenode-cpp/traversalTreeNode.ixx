module;
#include <vector>
export module leetcode_treenode_cpp.traversalTreeNode;

import leetcode_treenode_cpp.TreeNode;
namespace leetcode_treenode_cpp {
using std::vector;

export void traversalTreeNode(TreeNode* root, vector<TreeNode*>& nodes)
{

    if (root == nullptr) {

        return;
    }

    traversalTreeNode(root->left, nodes);
    traversalTreeNode(root->right, nodes);

    nodes.emplace_back(root);
}

}
