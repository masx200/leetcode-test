// +build ignore

#pragma once

// #ifndef _serialize_Tree_Node_
// #define _serialize_Tree_Node_
#include "TreeNode.hpp"
#include <iostream>
#include <stdio.h>
#include <string>
#include <vector>
#include <sstream>
using namespace std;
void traversalTreeNode(TreeNode *root, vector<TreeNode *> &nodes)
{

    if (root == NULL)
    {

        return;
    }

    traversalTreeNode(root->left, nodes);
    traversalTreeNode(root->right, nodes);
    // delete root;
    // cout << "freeTreeNode:" << root << endl;

    nodes.emplace_back(root);
    return;
}
// #endif //