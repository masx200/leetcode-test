// +build ignore

#pragma once

// #ifndef _serialize_Tree_Node_
// #define _serialize_Tree_Node_
#include "../insert-into-a-binary-search-tree/TreeNode.hpp"
#include <iostream>
#include <sstream>
#include <stdio.h>
#include <string>
#include <vector>
using namespace std;
void traversalTreeNode(TreeNode* root, vector<TreeNode*>& nodes)
{

    if (root == NULL) {

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