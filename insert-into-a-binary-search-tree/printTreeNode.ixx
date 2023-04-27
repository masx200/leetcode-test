// +build ignore

module;

#include <string>

#include <iostream>
#include <sstream>
export module insert_into_a_binary_search_tree.printTreeNode;

import leetcode_treenode_cpp.TreeNode;

import insert_into_a_binary_search_tree.debugTreeNode;

using namespace std;

using namespace leetcode_treenode_cpp;

namespace insert_into_a_binary_search_tree {

export void printTreeNode(TreeNode* node)
{

    auto s = debugTreeNode(node);
    cout << s << endl;
}
}
