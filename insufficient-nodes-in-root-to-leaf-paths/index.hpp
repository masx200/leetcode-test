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

#include "../insert-into-a-binary-search-tree/TreeNode.hpp"
class Solution
{
public:
    TreeNode *sufficientSubset(TreeNode *root, int limit)
    {
        // 如果节点为空直接返回即可
        if (!root)
            return root;
        // 如果当前节点为叶子节点
        if (!root->left && !root->right)
        {
            // 大于limit直接返回
            if (root->val >= limit)
                return root;
            // 小于limit  返回空节点 即代表删除这个节点
            else
                return nullptr;
        }
        // 非叶子节点，递归它的左右子节点
        root->left = sufficientSubset(root->left, limit - root->val);
        root->right = sufficientSubset(root->right, limit - root->val);
        // 如果递归后左右子节点为空，就代表经过它的路径都是小于limit，那么这个节点都可以删除了
        if (!root->left && !root->right)
            return nullptr;
        else
            return root;
    }
};
