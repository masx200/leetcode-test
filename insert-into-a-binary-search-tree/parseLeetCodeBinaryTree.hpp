// +build ignore

#pragma once
#include <queue>
#include <string>

using namespace std;
#include "TreeNode.hpp"
#include "freeTreeNode.hpp"
// https://github.com/uniform641/treeparse/blob/master/treeParser.hpp
struct token
{
    bool isDigit;
    int digit;
    token(bool i, int d)
        : isDigit(i), digit(d)
    {
    }
};

int tokenize(std::string &rawString, std::queue<token> &tokenQueue)
{
    auto sign = 1;
    int digit = 0;
    bool digitFlag = false;

    for (int i = 0; i < rawString.size(); i++)
    {
        if (rawString[i] <= '9' && rawString[i] >= '0')
        {
            digit = digit * 10 + rawString[i] - '0';
            digitFlag = true;
        }
        else if (rawString[i] == '-')
        {
            sign = -1;
        }
        else if (rawString[i] == ',')
        {
            if (digitFlag)
                tokenQueue.push(token{true, digit * sign});
            digit = 0;
            digitFlag = false;
            sign = 1;
        }
        else if (rawString[i] == ' ')
        {
            continue;
        }
        else if (rawString[i] == '[')
        {
            continue;
        }
        else if (rawString[i] == ']')
        {
            if (digitFlag)
            {
                tokenQueue.push(token{true, digit * sign });
            }
            continue;
        }
        else if (rawString[i] == 'n' && i + 3 < rawString.size() && rawString[i + 1] == 'u' && rawString[i + 2] == 'l' && rawString[i + 2] == 'l')
        {
            i += 3;
            tokenQueue.push(token{false, 0});
        }
        else
        {
            // unknown case
            return -1;
        }
    }
    return 0;
}

// void freeTreeNode(TreeNode* root)
// {
//     if (root == nullptr) {
//         return;
//     }
//     freeTreeNode(root->left);
//     freeTreeNode(root->right);
//     delete root;
// }

// parse LeetCode input to a Tree
// input format example: "[1,2,5,3,4,null,6]"
// return status: 0: success, -1: parse error, -2: tree structure invalid
// warning: this parser does not check the input format validity
int parseLeetCodeBinaryTree(std::string &rawString, TreeNode **pRoot)
{
    *pRoot = nullptr;
    std::queue<token> tokenQueue;
    int status = tokenize(rawString, tokenQueue);
    if (status != 0)
    {
        return -1;
    }
    if (tokenQueue.empty() || !tokenQueue.front().isDigit)
    {
        return 0;
    }

    std::queue<TreeNode *> nodeQueue;
    int rootVal = tokenQueue.front().digit;
    tokenQueue.pop();
    *pRoot = new TreeNode(rootVal);
    nodeQueue.push(*pRoot);

    while (!nodeQueue.empty())
    {
        TreeNode *currentNode = nodeQueue.front();
        nodeQueue.pop();
        // get left child
        if (!tokenQueue.empty())
        {
            token leftChild = tokenQueue.front();
            tokenQueue.pop();
            if (leftChild.isDigit)
            {
                currentNode->left = new TreeNode(leftChild.digit);
                nodeQueue.push(currentNode->left);
            }
        }
        // get right child
        if (!tokenQueue.empty())
        {
            token rightChild = tokenQueue.front();
            tokenQueue.pop();
            if (rightChild.isDigit)
            {
                currentNode->right = new TreeNode(rightChild.digit);
                nodeQueue.push(currentNode->right);
            }
        }
    }
    // shit happens
    if (!tokenQueue.empty())
    {
        freeTreeNode(*pRoot);
        return -2;
    }

    return 0;
}
