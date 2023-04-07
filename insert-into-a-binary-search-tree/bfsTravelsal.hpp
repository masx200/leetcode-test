// +build ignore

#pragma once
#include "TreeNode.hpp"
#include <queue>
#include <string>
using namespace std;
// https://github.com/uniform641/treeparse/blob/master/test.cpp
std::string bfsTravelsal(TreeNode* root)
{
    std::string result = "[";
    std::queue<TreeNode*> nodeQueue;
    nodeQueue.push(root);
    while (!nodeQueue.empty()) {
        TreeNode* node = nodeQueue.front();
        nodeQueue.pop();
        if (node == nullptr) {
            result += "null,";
        } else {
            result += std::to_string(node->val) + ",";
            nodeQueue.push(node->left);
            nodeQueue.push(node->right);
        }
    }
    if (result == std::string("[null,")) {
        return "[]";
    }
    result[result.size() - 1] = ']';
    return result;
}
