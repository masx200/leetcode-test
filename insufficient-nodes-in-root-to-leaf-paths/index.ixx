// +build ignore

// #pragma once
export module leetcode_test.insufficient_nodes_in_root_to_leaf_paths.Solution;
import leetcode_treenode_cpp.TreeNode;
using namespace leetcode_treenode_cpp;

namespace leetcode_test::insufficient_nodes_in_root_to_leaf_paths {
export class Solution {
public:
    TreeNode* sufficientSubset(TreeNode* root, int limit)
    {

        if (!root)
            return root;

        if (!root->left && !root->right) {

            if (root->val >= limit)
                return root;

            else
                return nullptr;
        }

        root->left = sufficientSubset(root->left, limit - root->val);
        root->right = sufficientSubset(root->right, limit - root->val);

        if (!root->left && !root->right)
            return nullptr;
        else
            return root;
    }
};
} // namespace leetcode_test::insufficient_nodes_in_root_to_leaf_paths
