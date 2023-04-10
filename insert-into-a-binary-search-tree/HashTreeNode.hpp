// +build ignore

#pragma once
// #include "TreeNode.hpp"
#include <stdio.h>
import leetcode_treenode_cpp.TreeNode;
using namespace leetcode_treenode_cpp;
struct HashTreeNode {
    std::size_t operator()(const TreeNode* k) const
    {
        return std::hash<long long>()((long long)k);
    }
};