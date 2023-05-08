// +build ignore

module;

#include <string>

#include <iostream>
#include <sstream>
export module leetcode_test.insufficient_nodes_in_root_to_leaf_paths.printTreeNode;

import leetcode_treenode_cpp.TreeNode;

import leetcode_test.insufficient_nodes_in_root_to_leaf_paths.debugTreeNode;

using namespace std;

using namespace leetcode_treenode_cpp;

namespace leetcode_test::insufficient_nodes_in_root_to_leaf_paths {

export void printTreeNode(TreeNode* node)
{

    auto s = debugTreeNode(node);
    cout << s << endl;
}
}
