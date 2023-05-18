module;
#include <chrono>
#include <string>
#include <thread>
#include <vector>
export module leetcode_test.web_crawler_multithreaded.HtmlParser;
using std::string;
using std::vector;
namespace leetcode_test::web_crawler_multithreaded {
export class HtmlParser {

public:
    vector<string> getUrls(string url)
    {
        using namespace std::chrono_literals;
        std::this_thread::sleep_for(15ms);
    }

    HtmlParser(vector<string>& urls, vector<vector<int>>& edges) { }
};

} // namespace leetcode_test::web_crawler_multithreaded