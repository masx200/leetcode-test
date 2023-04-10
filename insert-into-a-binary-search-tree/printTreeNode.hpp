// +build ignore

#pragma once
#include <string>
using namespace std;
// #include "TreeNode.hpp"
#include "debugTreeNode.hpp"
#include <iostream>
#include <sstream>
import leetcode_treenode_cpp.TreeNode;
using namespace leetcode_treenode_cpp;
void printTreeNode(TreeNode* node)
{

    auto s = debugTreeNode(node);
    cout << s << endl;
    return;
}