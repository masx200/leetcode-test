module;
#include <vector>
export module leetcode_test.split_a_circular_linked_list.CircularLinkedListToArray;

import leetcode_test.split_a_circular_linked_list.ListNode;
using std::vector;
namespace leetcode_test::split_a_circular_linked_list {
export auto CircularLinkedListToArray(
    ListNode* list) -> vector<int>
{
    if (!list)
        return {};
    auto array = vector<int> {};
    auto head = list;
    auto cur = list;

    while (cur && cur->next != head) {
        array.emplace_back(cur->val);
        cur = cur->next;
    }
    cur&& array.emplace_back(cur->val);
    return array;
}
}