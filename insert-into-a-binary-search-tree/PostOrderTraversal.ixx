module;
#include <functional>
export module leetcode_test.insert_into_a_binary_search_tree.PostOrderTraversal;

import leetcode_treenode_cpp.TreeNode;
using leetcode_treenode_cpp::TreeNode;
namespace leetcode_test::insert_into_a_binary_search_tree {
using std::function;

export void PostOrderTraversal(TreeNode* root, function<void(TreeNode*)> callback)
{

    if (root == nullptr) {

        return;
    }

    PostOrderTraversal(root->left, callback);
    PostOrderTraversal(root->right, callback);

    callback(root);
}

}