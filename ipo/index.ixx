module;
#include <functional>
#include <queue>
#include <utility>
#include <vector>
#include <algorithm>
export module leetcode_test.ipo.Solution;
using std::less;
using std::pair;
using std::priority_queue;
using std::vector;
using std::sort;
namespace leetcode_test::ipo {
export class Solution {
public:
    int findMaximizedCapital(int k, int w, vector<int>& profits,
        vector<int>& capital)
    {
        int n = profits.size();
        int curr = 0;
        priority_queue<int, vector<int>, less<int>> pq;
        vector<pair<int, int>> arr;

        for (int i = 0; i < n; ++i) {
            arr.emplace_back(capital[i], profits[i]);
        }
        sort(arr.begin(), arr.end());
        for (int i = 0; i < k; ++i) {
            while (curr < n && arr[curr].first <= w) {
                pq.push(arr[curr].second);
                curr++;
            }
            if (!pq.empty()) {
                w += pq.top();
                pq.pop();
            } else {
                break;
            }
        }

        return w;
    }
};
} // namespace leetcode_test::ipo