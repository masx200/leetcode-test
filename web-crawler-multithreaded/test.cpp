#include <algorithm>
#include <future>
#include <gtest/gtest.h>
#include <iostream>
#include <string>
#include <thread>
#include <unordered_set>
#include <vector>
import leetcode_test.web_crawler_multithreaded.HtmlParser;
import leetcode_test.web_crawler_multithreaded.Solution;
using namespace std;
using namespace leetcode_test::web_crawler_multithreaded;
template <class T>
concept sizable = requires(T& t)
{
    {
        t.size()
        } -> std::same_as<size_t>;
};

template <class T>
concept iterable =std::ranges::input_range<T>&& requires(T& t)
{
    { std::begin(t) };
    { std::end(t) } ;
    { ++std::begin(t) };

    {
        t.begin() != t.end()

        } -> std::same_as<bool>;
};

template <class T, typename Y>
concept equalable = requires(T& t, Y& y)
{
    {
        *t.begin() == *y.begin()
        } -> std::same_as<bool>;
};
template <typename T, typename Y>
requires sizable<T> and sizable<Y> and equalable<T, Y> and iterable<T> and iterable<Y>
auto assertContentEquals(const T& left, const Y& right)
{

    ASSERT_EQ(left.size(), right.size());
    auto a = left.begin();
    auto b = right.begin();
    for (; b != right.end() && a != left.end(); ++a, ++b) {

        ASSERT_EQ(*a, *b);
    }
}
TEST(web_crawler_multithreaded, main1)
{
    auto urls = vector<string> {
        "http://news.yahoo.com", "http://news.yahoo.com/news",
        "http://news.yahoo.com/news/topics/", "http://news.google.com"
    };
    auto edges = vector<pair<int, int>> { { 0, 2 }, { 2, 1 }, { 3, 2 }, { 3, 1 }, { 3, 0 } };
    auto startUrl = string { "http://news.google.com" };
    auto Output = vector<string> { "http://news.google.com" };

    auto htmlParser = HtmlParser { urls, edges };

    auto res = Solution().crawl(startUrl, htmlParser);
    cout << "output" << endl;
    for (auto& s : Output) {
        cout << s << endl;
    }
    cout << "result" << endl;
    for (auto& s : res) {
        cout << s << endl;
    }
    std::ranges::sort(res);
    std::ranges::sort(Output);
    assertContentEquals(res,
        Output);
    return;
}
TEST(web_crawler_multithreaded, main2)
{

    auto urls = vector<string> { "http://news.yahoo.com", "http://news.yahoo.com/news",
        "http://news.yahoo.com/news/topics/",
        "http://news.google.com", "http://news.yahoo.com/us" };
    auto edges = vector<pair<int, int>> { { 2, 0 }, { 2, 1 }, { 3, 2 }, { 3, 1 }, { 0, 4 } };
    auto startUrl = string { "http://news.yahoo.com/news/topics/" };
    auto Output = vector<string> {
        "http://news.yahoo.com", "http://news.yahoo.com/news",
        "http://news.yahoo.com/news/topics/", "http://news.yahoo.com/us"
    };

    auto htmlParser = HtmlParser { urls, edges };

    auto res = Solution().crawl(startUrl, htmlParser);
    cout << "output" << endl;
    for (auto& s : Output) {
        cout << s << endl;
    }
    cout << "result" << endl;
    for (auto& s : res) {
        cout << s << endl;
    }
    std::ranges::sort(res);
    std::ranges::sort(Output);
    assertContentEquals(res,
        Output);
}
int main(int argc, char** argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
