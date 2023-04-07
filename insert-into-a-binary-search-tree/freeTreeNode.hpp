// +build ignore

#pragma once

// #ifndef _serialize_Tree_Node_
// #define _serialize_Tree_Node_
#include "TreeNode.hpp"
#include <stdio.h>
#include <iostream>
#include <string>

#include <sstream>
using namespace std;
void freeTreeNode(TreeNode *root)
{

    if (root == NULL)
    {
        delete root;
        return;
    }

    freeTreeNode(root->left);
    freeTreeNode(root->right);
    return;
}
// #endif //