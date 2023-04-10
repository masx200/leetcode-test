// +build ignore

#pragma once
#include <vector>

using namespace std;
#include <algorithm>
#include <numeric>

#include "gcd.hpp"
namespace check_if_it_is_a_good_array
{

    class Solution
    {
    public:
        bool isGoodArray(vector<int> &nums)
        {
            int divisor = accumulate<std::vector<int>::iterator, int, int(int, int)>(
                nums.begin(), nums.end(), nums[0], gcd);
            return divisor == 1;
        }
    };
}