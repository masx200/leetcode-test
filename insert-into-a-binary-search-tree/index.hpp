// +build ignore

#pragma once
// #ifndef _insert_into_a_binary_search_tree_SOLUTION_
// #define _insert_into_a_binary_search_tree_SOLUTION_

#include "TreeNode.hpp"
#include <stdio.h>
class Solution
{
public:
    TreeNode *insertIntoBST(TreeNode *root, int val)
    {
        if (root == NULL)
        {
            TreeNode *node = new TreeNode(val);
            return node;
        }
        if (root->val > val)
            root->left = insertIntoBST(root->left, val);
        if (root->val < val)
            root->right = insertIntoBST(root->right, val);
        return root;
    }
};
// #endif //