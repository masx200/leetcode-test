module;
#include <vector>
export module leetcode_test.split_a_circular_linked_list.Solution;
import leetcode_test.split_a_circular_linked_list.ListNode;
using std::vector;

namespace leetcode_test::split_a_circular_linked_list {
export class Solution {
public:
    vector<ListNode*> splitCircularLinkedList(ListNode* list)
    {
        ListNode* slow = list;
        ListNode* fast = list;

        // Point `slow` to the last node in the first half.
        while (fast->next != list && fast->next->next != list) {
            slow = slow->next;
            fast = fast->next->next;
        }

        // Circle back the second half.
        ListNode* secondHead = slow->next;
        if (fast->next == list)
            fast->next = secondHead;
        else
            fast->next->next = secondHead;

        // Circle back the first half.
        slow->next = list;

        return { list, secondHead };
    }
};
}