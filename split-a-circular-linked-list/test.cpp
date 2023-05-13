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
TEST(split_a_circular_linked_list, test1)
{
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
}
TEST(split_a_circular_linked_list, test2)
{
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
}

int main(int argc, char** argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
