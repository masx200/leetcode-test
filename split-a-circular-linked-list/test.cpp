import leetcode_test.split_a_circular_linked_list.ListNode;
#include <ranges>
import leetcode_test.split_a_circular_linked_list.Solution;
import leetcode_test.split_a_circular_linked_list.ArrayToCircularLinkedList;
import leetcode_test.split_a_circular_linked_list.CircularLinkedListToArray;
import leetcode_test.split_a_circular_linked_list.TraversalCircularListNode;
#include <gtest/gtest.h>
#include <iterator>
#include <unordered_set>
#include <vector>
#ifdef __TEST__
#include <eventpp/callbacklist.h>
#endif
using namespace leetcode_test::split_a_circular_linked_list;
using namespace std;
using std::vector;
template <class T>
concept sizable = requires(T& t) {
    {
        t.size()
    } -> std::same_as<size_t>;
};
template <class T>
concept iterable = requires(T& t) {
    ++t.begin();
    {
        t.begin() != t.end()

    } -> std::same_as<bool>;
};

template <class T, typename Y>
concept equalable = requires(T& t, Y& y, size_t i) {
    {
        *t.begin() == *y.begin()
    } -> std::same_as<bool>;
};
template <typename T, typename Y>
    requires sizable<T> and sizable<Y> and equalable<T, Y> and iterable<T> and iterable<Y>
auto assertContentEquals(T& left, Y& right)
{

    ASSERT_EQ(
        left.size(),
        right.size());
    auto a = left.begin();
    auto b = right.begin();
    for (; b != right.end() && a != left.end(); ++a, ++b) {

        ASSERT_EQ(*a, *b);
    }
}
#ifdef __TEST__
struct ListNodeInspector {
    unordered_set<ListNode*> nodes;
    eventpp::CallbackList<void(ListNode*)>::Handle handleNew;
    eventpp::CallbackList<void(ListNode*)>::Handle handleDelete;
    ListNodeInspector()
    {
        auto handleNew = ListNode::CallbackNew.append([this](auto* node) {
            std::cout << "ListNode New:" << node << std::endl;
            nodes.insert(node);
        });
        this->handleNew = handleNew;
        auto handleDelete = ListNode::CallbackDelete.append([this](auto* node) {
            std::cout << "ListNode Delete:" << node << std::endl;

            nodes.erase(node);
        });
        this->handleDelete = handleDelete;
    }
    ~ListNodeInspector()
    {
        ListNode::CallbackNew.remove(handleNew);
        ListNode::CallbackDelete.remove(handleDelete);
    }
};
#endif
TEST(split_a_circular_linked_list, test1)
{
#ifdef __TEST__
    ListNodeInspector inspector;
#endif
    using std::ranges::views::transform;
    auto input = vector<int> { 1, 5, 7 };
    auto output = vector<vector<int>> { { 1, 5 }, { 7 } };
    auto* list = ArrayToCircularLinkedList(input);

    auto nodes = unordered_set<ListNode*> {};
    TraversalCircularListNode(list, [&](auto* node) { nodes.insert(node); });
    auto result = Solution().splitCircularLinkedList(list) | transform(CircularLinkedListToArray);

    assertContentEquals(result, output);

    for (auto* node : nodes) {
        delete node;
    }
#ifdef __TEST__
    ASSERT_EQ(size_t(0), inspector.nodes.size());
#endif
}
TEST(split_a_circular_linked_list, test2)
{
#ifdef __TEST__
    ListNodeInspector inspector;
#endif
    using std::ranges::views::transform;
    auto input = vector<int> { 2, 6, 1, 5 };
    auto output = vector<vector<int>> { { 2, 6 }, { 1, 5 } };
    auto* list = ArrayToCircularLinkedList(input);
    auto result = Solution().splitCircularLinkedList(list) | transform(CircularLinkedListToArray);
    auto nodes = unordered_set<ListNode*> {};
    TraversalCircularListNode(list, [&](auto* node) { nodes.insert(node); });
    assertContentEquals(result, output);
    for (auto* node : nodes) {
        delete node;
    }
#ifdef __TEST__
    ASSERT_EQ(size_t(0), inspector.nodes.size());
#endif
}

int main(int argc, char** argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
