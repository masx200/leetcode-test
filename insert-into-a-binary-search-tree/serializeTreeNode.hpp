// +build ignore

#pragma once

// #ifndef _serialize_Tree_Node_
// #define _serialize_Tree_Node_
#include "TreeNode.hpp"
#include <iostream>
#include <stdio.h>
#include <string>

#include <sstream>
using namespace std;
string serializeTreeNode(TreeNode* root)
{

    stringstream sstream;
    if (root == NULL) {

        sstream
            << "null";
        return sstream.str();
    }

    sstream << "TreeNode"; //@"<<root;
    sstream << "{val:" << root->val;
    sstream << ",left:" << serializeTreeNode(root->left);
    sstream << ",right:" << serializeTreeNode(root->right) << "}";
    return sstream.str();
}
// #endif //