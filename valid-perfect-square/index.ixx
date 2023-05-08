module;
#include <cmath>

export module leetcode_test.valid_perfect_square.Solution;
namespace leetcode_test::valid_perfect_square {

class Solution {

public:
    static auto sqrt(int num)
    {
        auto x0 = double(num);
        auto x1 = (10 * double(num) + 10);
        while (true) {
            x1 = -((x0)-num / x0) / (2) + x0;
            if (abs(x0 - x1) < 1e-14)
                break;
            x0 = x1;
        }
        return x0;
    }

public:
    bool isPerfectSquare(int num)
    {

        auto x = floor(sqrt(num));
        return x * x == num;
    }
};
export Solution;
} // namespace valid_perfect_square