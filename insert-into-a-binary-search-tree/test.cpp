// +build ignore

#include "TreeNode.hpp"
#include "index.hpp"
#include <iostream>
#include <stdio.h>
#include "serializeTreeNode.hpp"
#include "freeTreeNode.hpp"

#include <cppunit/TestResult.h>
#include <cppunit/TestResultCollector.h>
#include <cppunit/TextOutputter.h>
#include <cppunit/TestRunner.h>
#include <cppunit/extensions/HelperMacros.h>

using namespace std;
void println(string s)
{
    cout << s << endl;
}
void assertEquals(string s1, string s2)
{

    if (s1 != s2)
    {
        throw(("assertion error: " + s1 + " != " + s2));
    }
}
void test1()
{
    TreeNode *none = NULL;

    auto result2 = Solution().insertIntoBST(none, 111);

    println(serializeTreeNode(none));
    assertEquals(serializeTreeNode(none), "NULL");
    println(serializeTreeNode(result2));
    assertEquals(serializeTreeNode(result2), "TreeNode{val:111,left:NULL,right:NULL}");

    auto nodes = set{none, result2};
    for (auto node : nodes)
    {
        freeTreeNode(node);
    } // freeTreeNode(result2);
}

void test2()
{
    auto tree = new TreeNode(99);
    println(serializeTreeNode(tree));
    assertEquals(serializeTreeNode(tree), "TreeNode{val:99,left:NULL,right:NULL}");
    auto result = Solution().insertIntoBST(tree, 111);

    println(serializeTreeNode(result));
    assertEquals(serializeTreeNode(result), "TreeNode{val:99,left:NULL,right:TreeNode{val:111,left:NULL,right:NULL}}");
    // freeTreeNode(result);
    auto nodes = set{tree, result};
    for (auto node : nodes)
    {
        freeTreeNode(node);
    }
}

class StringTest : public CppUnit::TestFixture
{
    CPPUNIT_TEST_SUITE(StringTest);
    CPPUNIT_TEST(testSwap);
    CPPUNIT_TEST(testFind);
    CPPUNIT_TEST_SUITE_END();

public:
    void setUp()
    {
    }

    void tearDown()
    {
    }

    void testSwap()
    {
        test1();
    }

    void testFind()
    {
        test2();
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