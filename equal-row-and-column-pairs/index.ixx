module;
#include <functional>
#include <sstream>
#include <string>
#include <unordered_map>
#include <vector>

export module leetcode_test.equal_row_and_column_pairs.Solution;
using namespace std;
namespace leetcode_test::equal_row_and_column_pairs {

export class Solution {
  public:
    int equalPairs(vector<vector<int>> &grid) {
        auto toString = [](auto const &vec) {
            stringstream s;
            for (auto i : vec) {
                s << to_string(i) + "#";
            }
            return s.str();
        };
        int n = grid.size();
        unordered_map<string, int> cnt;
        for (auto row : grid) {
            cnt[toString(row)]++;
        }

        int res = 0;
        for (int j = 0; j < n; j++) {
            vector<int> arr;
            for (int i = 0; i < n; i++) {
                arr.emplace_back(grid[i][j]);
            }
            auto key = toString(arr);
            if (cnt.find(key) != cnt.end()) {
                res += cnt[key];
            }
        }
        return res;
    } // namespace leetcode_test::equal_row_and_column_pairs
};
} // namespace leetcode_test::equal_row_and_column_pairs