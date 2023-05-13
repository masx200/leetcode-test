module;
#include <functional>
export module leetcode_test.split_a_circular_linked_list.TraversalCircularListNode;
import leetcode_test.split_a_circular_linked_list.ListNode;
using std::function;
namespace leetcode_test::split_a_circular_linked_list {
export auto TraversalCircularListNode(ListNode* list, function<void(ListNode*)> callback)
{
    if (!list)
        return;

    auto head = list;
    auto cur = list;

    while (cur && cur->next != head) {
        callback(cur);
        cur = cur->next;
    }
    if (cur)
        callback(cur);
}
}
