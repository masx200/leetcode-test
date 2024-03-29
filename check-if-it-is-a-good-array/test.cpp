// +build ignore

#include <gtest/gtest.h>
#include <iostream>
#include <vector>
import leetcode_test.check_if_it_is_a_good_array.Solution;
using namespace std;
using namespace leetcode_test::check_if_it_is_a_good_array;
TEST(check_if_it_is_a_good_array, test1)
{
    cout << "check-if-it-is-a-good-array" << endl;
    auto nums = vector<int> { 12, 5, 7, 23 };

    auto output = true;

    ASSERT_EQ(output, Solution().isGoodArray(nums));
}
TEST(check_if_it_is_a_good_array, test2)
{

    auto nums = vector<int> { 29, 6, 10 };

    auto output = true;

    ASSERT_EQ(output, Solution().isGoodArray(nums));
}
TEST(check_if_it_is_a_good_array, test3)
{

    auto nums = vector<int> { 3, 6 };

    auto output = false;

    ASSERT_EQ(output, Solution().isGoodArray(nums));
}

int main(int argc, char** argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
