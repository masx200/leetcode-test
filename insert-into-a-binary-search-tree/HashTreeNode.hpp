#pragma once
#include "TreeNode.hpp"
#include <stdio.h>

struct HashTreeNode {
    std::size_t operator()(const TreeNode* k) const
    {
        return std::hash<long long>()((long long)k);
    }
};