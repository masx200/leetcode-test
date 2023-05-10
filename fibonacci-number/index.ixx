module;

#include <unordered_map>

export module leetcode_test.fibonacci_number.Solution;
namespace leetcode_test::fibonacci_number {
using std::unordered_map;
export class Solution {

public:
    int fib(int n)
    {

        static unordered_map<int, int> cache;

        if (cache.count(n))
            return cache.at(n);

        auto res = n == 0 ? 0 : n == 1 || n == 2 ? 1
                                                 : fib(n - 1) + fib(n - 2);

        cache[n] = res;

        return res;
    }
};
} // namespace leetcode_test::fibonacci_number
