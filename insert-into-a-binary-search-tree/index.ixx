// +build ignore

module;
// #pragma once

#include <cstdio>

export module leetcode_test.insert_into_a_binary_search_tree.Solution;
import leetcode_treenode_cpp.TreeNode;
using namespace leetcode_treenode_cpp;

namespace leetcode_test::insert_into_a_binary_search_tree {
export class Solution {
public:
    TreeNode* insertIntoBST(TreeNode* root, int val)
    {
        if (root == nullptr) {
            TreeNode* node = new TreeNode(val);
            return node;
        }
        if (root->val > val)
            root->left = insertIntoBST(root->left, val);
        if (root->val < val)
            root->right = insertIntoBST(root->right, val);
        return root;
    }
};

} // namespace leetcode_test::insert_into_a_binary_search_tree
