module;
#ifdef __TEST__
#include <eventpp/callbacklist.h>
#endif
export module leetcode_treenode_cpp.TreeNode;
namespace leetcode_treenode_cpp {
export struct TreeNode {
    int val = 0;
    TreeNode* left = nullptr;
    TreeNode* right = nullptr;

    TreeNode(int x = 0, TreeNode* left = nullptr, TreeNode* right = nullptr)
        : val(x)
        , left(left)
        , right(right)
    {
#ifdef __TEST__
        CallbackNew(this);
#endif
    }

    ~TreeNode()

    {
#ifdef __TEST__
        CallbackDelete(this);
#endif
    }

#ifdef __TEST__
    static eventpp::CallbackList<void(TreeNode*)> CallbackNew;
    static eventpp::CallbackList<void(TreeNode*)> CallbackDelete;
#endif
};
#ifdef __TEST__
eventpp::CallbackList<void(TreeNode*)> TreeNode::CallbackDelete {};
eventpp::CallbackList<void(TreeNode*)> TreeNode::CallbackNew {};
#endif
} // namespace leetcode_treenode_cpp
