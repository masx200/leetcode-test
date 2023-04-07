// +build ignore

#pragma once
#include <string>
using namespace std;
#include "TreeNode.hpp"
#include <sstream>
string debugTreeNode(TreeNode* root)
{

    stringstream sstream;
    if (root == NULL) {

        sstream << "null";
        return sstream.str();
    }

    sstream << "TreeNode@" << root;
    sstream << "{val:" << root->val;
    sstream << ",left:" << debugTreeNode(root->left);
    sstream << ",right:" << debugTreeNode(root->right) << "}";
    return sstream.str();
}