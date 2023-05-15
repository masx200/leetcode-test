// +build ignore

#include <gtest/gtest.h>
#include <iostream>
#include <unordered_set>
#include <string>
#ifdef __TEST__
#include <eventpp/callbacklist.h>
#endif
using namespace std;
import leetcode_test.insufficient_nodes_in_root_to_leaf_paths.Solution;
import leetcode_treenode_cpp.TreeNode;
using namespace leetcode_treenode_cpp;
import leetcode_treenode_cpp.traversalTreeNode;
import leetcode_treenode_cpp.LeetCodeTreeNodeToString;
import leetcode_treenode_cpp.parseLeetCodeBinaryTree;
import leetcode_test.insufficient_nodes_in_root_to_leaf_paths.printTreeNode;
using namespace leetcode_test::insufficient_nodes_in_root_to_leaf_paths;
using leetcode_test::insufficient_nodes_in_root_to_leaf_paths::printTreeNode;
#ifdef __TEST__
struct TreeNodeInspector {
    unordered_set<TreeNode*> nodes;
    eventpp::CallbackList<void(TreeNode*)>::Handle handleNew;
    eventpp::CallbackList<void(TreeNode*)>::Handle handleDelete;
    TreeNodeInspector()
    {
        auto handleNew = TreeNode::CallbackNew.append([this](auto* node) {
            std::cout << "TreeNode New:" << node << std::endl;
            nodes.insert(node);
        });
        this->handleNew = handleNew;
        auto handleDelete = TreeNode::CallbackDelete.append([this](auto* node) {
            std::cout << "TreeNode Delete:" << node << std::endl;

            nodes.erase(node);
        });
        this->handleDelete = handleDelete;
    }
    ~TreeNodeInspector()
    {
        TreeNode::CallbackNew.remove(handleNew);
        TreeNode::CallbackDelete.remove(handleDelete);
    }
};
#endif
void LeetCode1080TestExamples(std::string& root, int limit, std::string& output)
{
#ifdef __TEST__
    TreeNodeInspector inspector;
#endif
    TreeNode* tree = nullptr;
    int status = parseLeetCodeBinaryTree(root, &tree);

    ASSERT_EQ(0, status);

    auto nodes = vector<TreeNode*> {};
    traversalTreeNode(tree, nodes);
    printTreeNode(tree);

    // ASSERT_EQ(root, LeetCodeTreeNodeToString(tree));
    auto result = Solution().sufficientSubset(tree, limit);

    printTreeNode(result);
    ASSERT_EQ(output, LeetCodeTreeNodeToString(result));

    for (auto node : nodes) {

        delete node;
    }
#ifdef __TEST__
    ASSERT_EQ(size_t(0), inspector.nodes.size());
#endif
}

TEST(LeetCode1080, test1)
{
    cout << "insufficient-nodes-in-root-to-leaf-paths" << endl;
    auto root = string { "[1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14]" };

    auto limit = 1;
    auto output = string("[1,2,3,4,null,null,7,8,9,null,14]");
    LeetCode1080TestExamples(root, limit, output);
};
TEST(LeetCode1080, test2)
{

    auto root = string { "[5,4,8,11,null,17,4,7,1,null,null,5,3]" };

    auto limit = 22;
    auto output = string("[5,4,8,11,null,17,4,7,null,null,null,5]");
    LeetCode1080TestExamples(root, limit, output);
};
TEST(LeetCode1080, test3)
{
    auto root = string { "[5,-6,-6]" };

    auto limit = 0;
    auto output = string("[]");
    LeetCode1080TestExamples(root, limit, output);
};
TEST(LeetCode1080, test4)
{
    auto root = string { "[1,2,-3,-5,null,4,null]" };

    auto limit = -1;
    auto output = string("[1,null,-3,4]");

    LeetCode1080TestExamples(root, limit, output);
};

int main(int argc, char** argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
