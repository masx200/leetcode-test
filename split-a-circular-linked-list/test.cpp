#include <ranges>
import leetcode_test.split_a_circular_linked_list.Solution;
import leetcode_test.split_a_circular_linked_list.ArrayToCircularLinkedList;
import leetcode_test.split_a_circular_linked_list.CircularLinkedListToArray;
#include <gtest/gtest.h>
#include <vector>
using std::ranges::views::transform;
using namespace leetcode_test::split_a_circular_linked_list;
using std::vector;

template <class T>
concept sized = requires(T& t) {
    {
        t.size()
    } -> std::same_as<size_t>;
};

template <class T, typename Y>
concept equalable = requires(T& t, Y& y, size_t i) {
    {
        t[i] == y[i]
    } -> std::same_as<bool>;
};
template <typename T, typename Y>
    requires sized<T> and sized<Y> and equalable<T, Y>
auto assertContentEquals(T& left, Y& right)
{

    ASSERT_EQ(
        left.size(),
        right.size());
    for (auto i = 0; i < left.size(); ++i) {
        ASSERT_EQ(left[i], right[i]);
    }
}
TEST(split_a_circular_linked_list, test1)
{
    auto input = vector<int> { 1, 5, 7 };
    auto output = vector<vector<int>> { { 1, 5 }, { 7 } };
    auto* list = ArrayToCircularLinkedList(input);
    auto result = Solution().splitCircularLinkedList(list) | transform(CircularLinkedListToArray);

    assertContentEquals(result, output);
}
TEST(split_a_circular_linked_list, test2)
{
    auto input = vector<int> { 2, 6, 1, 5 };
    auto output = vector<vector<int>> { { 2, 6 }, { 1, 5 } };
    auto* list = ArrayToCircularLinkedList(input);
    auto result = Solution().splitCircularLinkedList(list) | transform(CircularLinkedListToArray);

    assertContentEquals(result, output);
}

int main(int argc, char** argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
