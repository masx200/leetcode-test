// +build ignore

module;

// #pragma once

export module leetcode_test.insert_into_a_binary_search_tree.EqualTreeNode;

// #include "TreeNode.hpp"

import leetcode_treenode_cpp.TreeNode;
using namespace leetcode_treenode_cpp;

namespace leetcode_test::insert_into_a_binary_search_tree {
export struct EqualTreeNode {
    bool operator()(const TreeNode* lhs, const TreeNode* rhs) const
    {
        return lhs == rhs;
    }
};
}