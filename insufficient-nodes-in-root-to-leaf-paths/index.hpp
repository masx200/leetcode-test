// +build ignore

#pragma once
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

// #include "../insert-into-a-binary-search-tree/TreeNode.hpp"
import leetcode_treenode_cpp.TreeNode;
using namespace leetcode_treenode_cpp;
class Solution {
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
