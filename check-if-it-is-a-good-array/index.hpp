// +build ignore

#pragma once
#include <vector>

using namespace std;
#include <algorithm>
#include <numeric>

// #include "gcd.hpp"
namespace check_if_it_is_a_good_array
{

    class Solution
    {

    public:
        static inline int gcd(int a, int b)
        {
            int r;
            while (b > 0)
            {
                r = a % b;
                a = b;
                b = r;
            }
            return a;
        }

    public:
        bool isGoodArray(vector<int> &nums)
        {
            return 1 == accumulate<std::vector<int>::iterator, int, int(int, int)>(nums.begin(), nums.end(), nums[0], gcd);
        }
    };

}