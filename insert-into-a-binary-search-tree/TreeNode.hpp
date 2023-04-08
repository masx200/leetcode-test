// +build ignore

#pragma once
#include <iostream>
using namespace std;
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode()
        : val(0)
        , left(nullptr)
        , right(nullptr)
    {
        // cout << "newTreeNode:" << this << endl;
    }
    TreeNode(int x)
        : val(x)
        , left(nullptr)
        , right(nullptr)
    {
        // cout << "newTreeNode:" << this << endl;
    }
    TreeNode(int x, TreeNode* left, TreeNode* right)
        : val(x)
        , left(left)
        , right(right)
    {
        // cout << "newTreeNode:" << this << endl;
    }
};
// #endif //