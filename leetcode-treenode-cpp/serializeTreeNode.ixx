module;
#include <iostream>
#include <sstream>
#include <string>

export module leetcode_treenode_cpp.serializeTreeNode;

import leetcode_treenode_cpp.TreeNode;
namespace leetcode_treenode_cpp {
// using std::basic_stringstream;
using std::string;
using std::stringstream;
export string serializeTreeNode(TreeNode* root)
{

    stringstream sstream;
    if (root == nullptr) {

        sstream
            << "null";
        return sstream.str();
    }

    sstream << "TreeNode";
    sstream << "{val:" << root->val;
    sstream << ",left:" << serializeTreeNode(root->left);
    sstream << ",right:" << serializeTreeNode(root->right) << "}";
    return sstream.str();
}

}
