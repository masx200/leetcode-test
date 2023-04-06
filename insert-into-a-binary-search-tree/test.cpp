// +build ignore

#include "TreeNode.cpp"
#include "index.cpp"
#include <iostream>
#include <stdio.h>
#include "serializeTreeNode.cpp"
using namespace std;
#include <stdexcept>
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
int main(int argc, char const *argv[])
{
    try
    {
        test1();
        test2();
        // assertEquals("a", "b");
    }
    catch (string e)
    {
        cerr << e << endl;
        exit(1);
    }

    return 0;
}
