module;
#include <chrono>
#include <string>
#include <thread>
#include <unordered_map>
#include <utility>
#include <vector>
export module leetcode_test.web_crawler_multithreaded.HtmlParser;
using std::string;
using std::vector;
using namespace std;
namespace leetcode_test::web_crawler_multithreaded {
export class HtmlParser {
private:
    unordered_map<string, vector<string>> urlMap;

public:
    vector<string> getUrls(string& url)
    {
        using namespace std::chrono_literals;
        std::this_thread::sleep_for(15ms);
        return urlMap[url];
    }

    HtmlParser(vector<string>& urls, vector<pair<int, int>>& edges)
    {
        for (auto& [k, v] : edges) {
            urlMap[urls[k]].emplace_back(urls[v]);
        }
    }
};

} // namespace leetcode_test::web_crawler_multithreaded