// +build ignore

#pragma once

// #ifndef _serialize_Tree_Node_
// #define _serialize_Tree_Node_
#include "TreeNode.cpp"
#include <stdio.h>
#include <iostream>
#include <string>

#include <sstream>
using namespace std;
string serializeTreeNode(TreeNode *root)
{

    stringstream sstream;
    if (root == NULL)
    {

        sstream
            << "NULL";
        return sstream.str();
    }
    // auto root = root;
    sstream << "TreeNode";
    sstream << "{val:" << root->val;
    sstream << ",left:" << serializeTreeNode(root->left);
    sstream << ",right:" << serializeTreeNode(root->right) << "}";
    return sstream.str();
}
// #endif //