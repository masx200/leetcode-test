// +build ignore

#pragma once
// #include "TreeNode.hpp"
import leetcode_treenode_cpp.TreeNode;
using namespace leetcode_treenode_cpp;
struct EqualTreeNode {
    bool operator()(const TreeNode* lhs, const TreeNode* rhs) const
    {
        return lhs == rhs;
    }
};