// +build ignore

#pragma once
#include <vector>

using namespace std;
#include<numeric>
#include <algorithm>
//template <class InputIt, class T, class BinaryOperation>
//constexpr // since C++20
//    T
//    accumulate2(InputIt first, InputIt last, T init, BinaryOperation op)
//{
//    for (; first != last; ++first)
//        init = op(std::move(init), *first); // std::move since C++11

//    return init;
//};
int gcd(int num1, int num2)
{
   while (num2 != 0) {
       int temp = num1;
       num1 = num2;
        num2 = temp % num2;
   }
    return num1;
};

class Solution {
public:
    bool isGoodArray(vector<int>& nums)
    {
        int divisor = accumulate<std::vector<int>::iterator, int, int(int, int)>(nums.begin(), nums.end(), nums[0], gcd);
        return divisor == 1;
    }
};