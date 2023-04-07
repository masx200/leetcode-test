#pragma once
#include "TreeNode.hpp"
struct EqualTreeNode {
    bool operator()(const TreeNode* lhs, const TreeNode* rhs) const
    {
        return lhs == rhs;
    }
};