module;
#include <algorithm>
#include <vector>
#include <stack>
export module largest_rectangle_in_histogram.Solution;
// 版本二
using std::max;
using std::stack;
using std::vector;
namespace largest_rectangle_in_histogram
{
    export class Solution
    {

    public:
        int
        largestRectangleArea(vector<int> &heights)
        {
            stack<int> st;
            heights.insert(heights.begin(), 0); // 数组头部加入元素0
            heights.push_back(0);               // 数组尾部加入元素0
            st.push(0);
            int result = 0;
            for (int i = 1; i < heights.size(); i++)
            {
                while (heights[i] < heights[st.top()])
                {
                    int mid = st.top();
                    st.pop();
                    int w = i - st.top() - 1;
                    int h = heights[mid];
                    result = max(result, w * h);
                }
                st.push(i);
            }
            return result;
        }
    };
}