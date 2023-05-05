module;
#include <algorithm>
#include <vector>
export module maximum_sum_with_exactly_k_elements.Solution;
using std::vector;
namespace maximum_sum_with_exactly_k_elements {

export class Solution {

public:
    int maximizeSum(vector<int>& nums, int k)
    {
        auto m = *std::max_element(nums.begin(), nums.end());
        return k * (m + m + k - 1) / 2;
    }
};
}