// +build ignore

#include "TreeNode.hpp"
#include "index.hpp"
#include <iostream>
#include <stdio.h>
#include "serializeTreeNode.hpp"

// #include <stdexcept>
#include <cppunit/TestResult.h>
#include <cppunit/TestResultCollector.h>
#include <cppunit/TextOutputter.h>
#include <cppunit/TestRunner.h>
#include <cppunit/extensions/HelperMacros.h>
// #include "ss"
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
}

void test2()
{
    auto tree = new TreeNode(99);
    println(serializeTreeNode(tree));
    assertEquals(serializeTreeNode(tree), "TreeNode{val:99,left:NULL,right:NULL}");
    auto result = Solution().insertIntoBST(tree, 111);

    println(serializeTreeNode(result));
    assertEquals(serializeTreeNode(result), "TreeNode{val:99,left:NULL,right:TreeNode{val:111,left:NULL,right:NULL}}");
}

// 定义测试类
class StringTest : public CppUnit::TestFixture
{
    CPPUNIT_TEST_SUITE(StringTest); // 定义测试包
    CPPUNIT_TEST(testSwap);         // 添加测试用例1
    CPPUNIT_TEST(testFind);         // 添加测试用例2
    CPPUNIT_TEST_SUITE_END();       // 结束测试包定义

public:
    void setUp() // 初始化
    {
        // m_str1 =  "Hello, world";
        // m_str2 =  "Hi, cppunit";
    }

    void tearDown() // 清理
    {
    }

    void testSwap() // 测试方法1
    {
        test1();
        //  std:: string str1 = m_str1;
        //  std:: string str2 = m_str2;
        // m_str1.swap(m_str2);

        // CPPUNIT_ASSERT(m_str1 == str2);
        // CPPUNIT_ASSERT(m_str2 == str1);
    }

    void testFind() // 测试方法2
    {
        test2();
        //  int pos1 = m_str1.find(',');
        //  int pos2 = m_str2.rfind(',');

        // CPPUNIT_ASSERT_EQUAL(5, pos1);
        // CPPUNIT_ASSERT_EQUAL(2, pos2);
    }

    // protected:
    //      std:: string     m_str1;
    //      std:: string     m_str2;
};

CPPUNIT_TEST_SUITE_REGISTRATION(StringTest); // 自动注册测试包
// int main(int argc, char const *argv[])
// {
//     try
//     {
//         test1();
//         test2();
//         // assertEquals("a", "b");
//     }
//     catch (string e)
//     {
//         cerr << e << endl;
//         exit(1);
//     }

//     return 0;
// }
int main(int argc, char *argv[])
{
    CppUnit::TestResult r;
    CppUnit::TestResultCollector rc;
    r.addListener(&rc); // 准备好结果收集器

    CppUnit::TestRunner runner; // 定义执行实体
    runner.addTest(CppUnit::TestFactoryRegistry::getRegistry().makeTest());
    runner.run(r); // 运行测试

    CppUnit::TextOutputter o(&rc, std::cout);
    o.write(); // 将结果输出

    return rc.wasSuccessful() ? 0 : -1;
}