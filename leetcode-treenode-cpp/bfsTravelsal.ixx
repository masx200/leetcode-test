module;

#include <queue>
#include <string>
export module leetcode_treenode_cpp.bfsTravelsal;

import leetcode_treenode_cpp.TreeNode;
namespace leetcode_treenode_cpp {

export

    std::string
    bfsTravelsal(TreeNode* root)
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
}
