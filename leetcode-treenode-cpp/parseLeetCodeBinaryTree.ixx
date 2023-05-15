module;

#include <queue>
#include <string>

export module leetcode_treenode_cpp.parseLeetCodeBinaryTree;

import leetcode_treenode_cpp.TreeNode;
import leetcode_treenode_cpp.freeTreeNode;
namespace leetcode_treenode_cpp {

struct token {
    bool isDigit;
    int digit;
    token(bool i, int d)
        : isDigit(i)
        , digit(d)
    {
    }
};

int tokenize(std::string& rawString, std::queue<token>& tokenQueue)
{
    auto sign = 1;
    int digit = 0;
    bool digitFlag = false;

    for (int i = 0; i < rawString.size(); i++) {
        if (rawString[i] <= '9' && rawString[i] >= '0') {
            digit = digit * 10 + rawString[i] - '0';
            digitFlag = true;
        } else if (rawString[i] == '-') {
            sign = -1;
        } else if (rawString[i] == ',') {
            if (digitFlag)
                tokenQueue.emplace(true, digit * sign);
            digit = 0;
            digitFlag = false;
            sign = 1;
        } else if (rawString[i] == ' ') {
            continue;
        } else if (rawString[i] == '[') {
            continue;
        } else if (rawString[i] == ']') {
            if (digitFlag) {
                tokenQueue.emplace(true, digit * sign);
            }
            continue;
        } else if (rawString[i] == 'n' && static_cast<unsigned long long>(i) + 3 < rawString.size() && rawString[static_cast<std::basic_string<char, std::char_traits<char>, std::allocator<char>>::size_type>(i) + 1] == 'u' && rawString[static_cast<std::basic_string<char, std::char_traits<char>, std::allocator<char>>::size_type>(i) + 2] == 'l' && rawString[static_cast<std::basic_string<char, std::char_traits<char>, std::allocator<char>>::size_type>(i) + 2] == 'l') {
            i += 3;
            tokenQueue.emplace(false, 0);
        } else {

            return -1;
        }
    }
    return 0;
}

export int parseLeetCodeBinaryTree(std::string& rawString, TreeNode** pRoot)
{
    *pRoot = nullptr;
    std::queue<token> tokenQueue;
    int status = tokenize(rawString, tokenQueue);
    if (status != 0) {
        return -1;
    }
    if (tokenQueue.empty() || !tokenQueue.front().isDigit) {
        return 0;
    }

    std::queue<TreeNode*> nodeQueue;
    int rootVal = tokenQueue.front().digit;
    tokenQueue.pop();
    *pRoot = new TreeNode(rootVal);
    nodeQueue.push(*pRoot);

    while (!nodeQueue.empty()) {
        TreeNode* currentNode = nodeQueue.front();
        nodeQueue.pop();

        if (!tokenQueue.empty()) {
            token leftChild = tokenQueue.front();
            tokenQueue.pop();
            if (leftChild.isDigit) {
                currentNode->left = new TreeNode(leftChild.digit);
                nodeQueue.push(currentNode->left);
            }
        }

        if (!tokenQueue.empty()) {
            token rightChild = tokenQueue.front();
            tokenQueue.pop();
            if (rightChild.isDigit) {
                currentNode->right = new TreeNode(rightChild.digit);
                nodeQueue.push(currentNode->right);
            }
        }
    }

    if (!tokenQueue.empty()) {
        freeTreeNode(*pRoot);
        return -2;
    }

    return 0;
}
}
