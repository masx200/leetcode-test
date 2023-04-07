// +build ignore

#pragma once
#include <string>
using namespace std;
#include "TreeNode.hpp"
#include "debugTreeNode.hpp"
#include <sstream>
void printTreeNode(TreeNode* node)
{

    auto s = debugTreeNode(node);
    cout << s << endl;
    return;
}