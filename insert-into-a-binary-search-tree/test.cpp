// +build ignore

#include "TreeNode.hpp"
#include "freeTreeNode.hpp"
#include "index.hpp"
#include "serializeTreeNode.hpp"
#include <cppunit/TestResult.h>
#include <cppunit/TestResultCollector.h>
#include <cppunit/TestRunner.h>
#include <cppunit/TextOutputter.h>
#include <cppunit/extensions/HelperMacros.h>
#include <iostream>
#include <stdio.h>
#include <string>
#include <vector>

#include <sstream>
#include <unordered_set>
using namespace std;
#include "EqualTreeNode.hpp"
#include "HashTreeNode.hpp"
// #include "bfsTravelsal.hpp"
#include "LeetCodeTreeNodeToString.hpp"
#include "debugTreeNode.hpp"
#include "printTreeNode.hpp"
#include "parseLeetCodeBinaryTree.hpp"

void println(int s)
{
    cout << s << endl;
}

void println(string s)
{
    cout << s << endl;
}

void assertEquals(string s1, string s2)
{
    CPPUNIT_ASSERT_EQUAL(s1, s2);
    // if (s1 != s2)
    // {
    //     throw(("assertion error: " + s1 + " != " + s2));
    // }
}

void test1()
{
    println("insert-into-a-binary-search-tree");
    println("test1 start");
    TreeNode *none = NULL;

    auto result2 = Solution().insertIntoBST(none, 111);

    println(serializeTreeNode(none));
    assertEquals(serializeTreeNode(none), "null");
    println(serializeTreeNode(result2));
    assertEquals(serializeTreeNode(result2),
                 "TreeNode{val:111,left:null,right:null}");

    auto nodes = unordered_set<TreeNode *, HashTreeNode, EqualTreeNode>{none, result2};
    for (auto node : nodes)
    {
        printTreeNode(node);
        freeTreeNode(node);
    }
    println("test1 end");
}

void test2()
{
    println("test2 start");
    auto tree = new TreeNode(99);
    println(serializeTreeNode(tree));
    assertEquals(serializeTreeNode(tree),
                 "TreeNode{val:99,left:null,right:null}");
    auto result = Solution().insertIntoBST(tree, 111);

    println(serializeTreeNode(result));
    assertEquals(serializeTreeNode(result),
                 "TreeNode{val:99,left:null,right:TreeNode{val:111,left:null,"
                 "right:null}}");

    auto nodes = unordered_set<TreeNode *, HashTreeNode, EqualTreeNode>{tree, result};
    for (auto node : nodes)
    {
        printTreeNode(node);
        freeTreeNode(node);
    }
    println("test2 end");
}
struct ExampleType
{
    string root;
    int val;
    string output;
};
class StringTest : public CppUnit::TestFixture
{
    CPPUNIT_TEST_SUITE(StringTest);
    CPPUNIT_TEST(testSwap);
    CPPUNIT_TEST(testFind);

    CPPUNIT_TEST(test3);
    CPPUNIT_TEST(test4);
    CPPUNIT_TEST(test5);
    CPPUNIT_TEST_SUITE_END();

public:
    void setUp() {}
    void test4()
    {

        auto examples = vector<ExampleType>{{"[4,2,7,1,3]", 5, "[4,2,7,1,3,5]"},

                                            {"[40,20,60,10,30,50,70]", 25, "[40,20,60,10,30,50,70,null,null,25]"},
                                            {"[4,2,7,1,3,null,null,null,null,null,null]", 5, "[4,2,7,1,3,5]"}};

        for (auto &example : examples)
        {
            TreeNode *root = nullptr;
            int status = parseLeetCodeBinaryTree(example.root, &root);
            CPPUNIT_ASSERT_EQUAL(0, status);
            auto output = Solution().insertIntoBST(root, example.val);

            CPPUNIT_ASSERT_EQUAL(LeetCodeTreeNodeToString(output),
                                 example.output);
            println(example.root);
            println(example.val);
            println(example.output);
            auto nodes = unordered_set<TreeNode *, HashTreeNode, EqualTreeNode>{root, output};
            for (auto node : nodes)
            {
                printTreeNode(node);
                freeTreeNode(node);
            }
        }
    }
    void tearDown() {}

    void testSwap() { test1(); }

    void testFind() { test2(); }

    void test3()
    {
        println("test3 start");
        auto rawString = string("[4,2,7,1,3]");
        auto val = 5;
        TreeNode *root = nullptr;
        int status = parseLeetCodeBinaryTree(rawString, &root);
        CPPUNIT_ASSERT_EQUAL(0, status);

        printTreeNode(root);
        std::string result = LeetCodeTreeNodeToString(root);
        CPPUNIT_ASSERT_EQUAL(result, rawString);
        println(result);
        println(serializeTreeNode(root));
        auto serialized = string("TreeNode{val:4,left:TreeNode{val:2,left:TreeNode{val:1,left:null,right:null},right:TreeNode{val:3,left:null,right:null}},right:TreeNode{val:7,left:null,right:null}}");
        CPPUNIT_ASSERT_EQUAL(serializeTreeNode(root),
                             serialized);
        freeTreeNode(root);
        println("test3 end");
    }
    void test5()
    {
        println("test5 start");
        auto rawString = string("[-4,-2,-7,-1,-3]");
        auto val = 5;
        TreeNode* root = nullptr;
        int status = parseLeetCodeBinaryTree(rawString, &root);
        CPPUNIT_ASSERT_EQUAL(0, status);

        printTreeNode(root);
        std::string result = LeetCodeTreeNodeToString(root);
        CPPUNIT_ASSERT_EQUAL(result, rawString);
        println(result);
        println(serializeTreeNode(root));
        auto serialized = string("TreeNode{val:-4,left:TreeNode{val:-2,left:TreeNode{val:-1,left:null,right:null},right:TreeNode{val:-3,left:null,right:null}},right:TreeNode{val:-7,left:null,right:null}}");
        CPPUNIT_ASSERT_EQUAL(serializeTreeNode(root),
            serialized);
        freeTreeNode(root);
        println("test5 end");
    }
};

CPPUNIT_TEST_SUITE_REGISTRATION(StringTest);

int main(int argc, char *argv[])
{
    CppUnit::TestResult r;
    CppUnit::TestResultCollector rc;
    r.addListener(&rc);

    CppUnit::TestRunner runner;
    runner.addTest(CppUnit::TestFactoryRegistry::getRegistry().makeTest());
    runner.run(r);

    CppUnit::TextOutputter o(&rc, std::cout);
    o.write();

    return rc.wasSuccessful() ? 0 : -1;
}