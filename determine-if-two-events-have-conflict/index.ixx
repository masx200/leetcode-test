module;
#include <string>
#include <vector>
export module leetcode_test.determine_if_two_events_have_conflict.Solution;

using std::string;
using std::vector;

namespace leetcode_test::determine_if_two_events_have_conflict {
export class Solution {
public:
    bool haveConflict(vector<string>& event1, vector<string>& event2)
    {
        return event1[0] <= event2[1] && event1[1] >= event2[0];
    }
};
}