export module leetcode_test.split_a_circular_linked_list.Solution;
namespace leetcode_test::split_a_circular_linked_list {
export struct ListNode {
    int val = 0;
    ListNode* next = nullptr;

    ListNode(int x = 0, ListNode* next = nullptr)
        : val(x)
        , next(next)
    {
    }
};
}