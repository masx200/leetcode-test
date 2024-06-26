// +build ignore

#include <gtest/gtest.h>
#include <iostream>

import leetcode_test.fibonacci_number.Solution;
using namespace std;
using namespace leetcode_test::fibonacci_number;
TEST(fibonacci_number, test1)
{
    cout << "fibonacci_number" << endl;
    auto nums = 2;

    auto output = 1;

    ASSERT_EQ(output, Solution().fib(nums));
}
TEST(fibonacci_number, test2)
{

    auto nums = 3;

    auto output = 2;

    ASSERT_EQ(output, Solution().fib(nums));
}
TEST(fibonacci_number, test3)
{

    auto nums = 4;

    auto output = 3;

    ASSERT_EQ(output, Solution().fib(nums));
}
TEST(fibonacci_number, test4)
{

    auto nums = 30;

    auto output = 832040;

    ASSERT_EQ(output, Solution().fib(nums));
}
TEST(fibonacci_number, test5)
{

    auto nums = 0;

    auto output = 0;

    ASSERT_EQ(output, Solution().fib(nums));
}

int main(int argc, char** argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
