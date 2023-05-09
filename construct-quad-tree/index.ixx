module;

#include <functional>
#include <vector>
export module leetcode_test.construct_quad_tree.Solution;
import leetcode_test.construct_quad_tree.Node;
using std::function;
using std::vector;
namespace leetcode_test::construct_quad_tree {

export class Solution {
public:
    Node* construct(vector<vector<int>>& grid)
    {
        function<Node*(int, int, int, int)> dfs = [&](int r0, int c0, int r1, int c1) {
            for (int i = r0; i < r1; ++i) {
                for (int j = c0; j < c1; ++j) {
                    if (grid[i][j] != grid[r0][c0]) {
                        return new Node(
                            true,
                            false,
                            dfs(r0, c0, (r0 + r1) / 2, (c0 + c1) / 2),
                            dfs(r0, (c0 + c1) / 2, (r0 + r1) / 2, c1),
                            dfs((r0 + r1) / 2, c0, r1, (c0 + c1) / 2),
                            dfs((r0 + r1) / 2, (c0 + c1) / 2, r1, c1));
                    }
                }
            }

            return new Node(grid[r0][c0], true);
        };
        return dfs(0, 0, grid.size(), grid.size());
    }
};
};