module;
#ifdef __TEST__
#include <eventpp/callbacklist.h>
#endif
export module leetcode_test.split_a_circular_linked_list.ListNode;
namespace leetcode_test::split_a_circular_linked_list {
export struct ListNode {
    int val = 0;
    ListNode* next = nullptr;

    ListNode(int x = 0, ListNode* next = nullptr)
        : val(x)
        , next(next)
    {
#ifdef __TEST__
        CallbackNew(this);
#endif
    }
    ~ListNode()

    {
#ifdef __TEST__
        CallbackDelete(this);
#endif
    }

#ifdef __TEST__
    static eventpp::CallbackList<void(ListNode*)> CallbackNew;
    static eventpp::CallbackList<void(ListNode*)> CallbackDelete;
#endif
};
#ifdef __TEST__
eventpp::CallbackList<void(ListNode*)> ListNode::CallbackDelete {};
eventpp::CallbackList<void(ListNode*)> ListNode::CallbackNew {};
#endif
}
