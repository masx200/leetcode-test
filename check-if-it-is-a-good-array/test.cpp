// +build ignore

#include "index.hpp"
#include <gtest/gtest.h>
#include <iostream>

using namespace std;

TEST(check_if_it_is_a_good_array, test1)
{

    auto nums = vector<int>{12, 5, 7, 23};

    auto output = true;

    EXPECT_EQ(output, Solution().isGoodArray(nums));
};
TEST(check_if_it_is_a_good_array, test2)
{

    auto nums = vector<int>{29, 6, 10};

    auto output = true;

    EXPECT_EQ(output, Solution().isGoodArray(nums));
};
TEST(check_if_it_is_a_good_array, test3)
{

    auto nums = vector<int>{3, 6};

    auto output = false;

    EXPECT_EQ(output, Solution().isGoodArray(nums));
};

int main(int argc, char **argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
