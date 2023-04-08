// +build ignore

// gtest_sum.cpp
#include "index.hpp"
#include <gtest/gtest.h>
#include <iostream>
// int sum(int a, int b)
//{
////    return a + b;
//}
using namespace std;

TEST(check_if_it_is_a_good_array, test1)
{

    auto nums = vector<int> { 12, 5, 7, 23 };

    auto output = true;
    // EXPECT_EQ(5, sum(2, 3)); // 求合2+3=5
    // EXPECT_NE(3, sum(3, 4)); // 求合3+4 != 3
    EXPECT_EQ(output, Solution().isGoodArray(nums));
};

// 如果在此处不写main函数，那么在链接库的时候还需要链接-lgtest_main, 否则只需链接-lgtest即可。
// #if 0
int main(int argc, char** argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
// #endif
