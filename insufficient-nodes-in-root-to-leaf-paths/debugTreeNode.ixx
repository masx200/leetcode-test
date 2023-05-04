// +build ignore

module;

// #pragma once
#include <string>

// #include "TreeNode.hpp"
#include <sstream>
export module insert_into_a_binary_search_tree.debugTreeNode;

import leetcode_treenode_cpp.TreeNode;
using namespace leetcode_treenode_cpp;

using namespace std;
namespace insert_into_a_binary_search_tree {
export

    string
    debugTreeNode(TreeNode* root)
{

    stringstream sstream;
    if (root == nullptr) {

        sstream << "null";
        return sstream.str();
    }

    sstream << "TreeNode"; //@" << root;
    sstream << "{\nval:" << root->val;
    sstream << ",left:" << debugTreeNode(root->left);
    sstream << ",right:" << debugTreeNode(root->right) << "\n}";
    return sstream.str();
}
}