// +build ignore

module;

// #pragma once

#include <functional>

#include <cstdlib>

#include <stdio.h>

export module insert_into_a_binary_search_tree.HashTreeNode;
import leetcode_treenode_cpp.TreeNode;
using namespace leetcode_treenode_cpp;
namespace insert_into_a_binary_search_tree {
export struct HashTreeNode {
    std::size_t operator()(const TreeNode* k) const
    {
        return std::hash<long long>()((long long)k);
    }
};
}