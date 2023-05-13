module;
#include <vector>
export module leetcode_test.split_a_circular_linked_list.ArrayToCircularLinkedList;

import leetcode_test.split_a_circular_linked_list.ListNode;
using std::vector;
namespace leetcode_test::split_a_circular_linked_list {
export auto ArrayToCircularLinkedList(
    vector<int>& array) -> ListNode*
{
    if (array.size() == 0) {
        return nullptr;
    }
    auto head = new ListNode(array[0]);
    auto cur = head;
    for (auto i = 1; i < array.size(); i++) {
        cur->next = new ListNode(array[i]);
        cur = cur->next;
    }
    cur->next = head;
    return head;
}
}
