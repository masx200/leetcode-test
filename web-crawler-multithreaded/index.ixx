module;
#include <future>
#include <string>
#include <thread>
#include <unordered_set>
#include <vector>
export module leetcode_test.web_crawler_multithreaded.Solution;
import leetcode_test.web_crawler_multithreaded.HtmlParser;
using namespace std;

using std::string;
using std::vector;

namespace leetcode_test::web_crawler_multithreaded {

export class Solution {
private:
    unordered_set<string> seen;

public:
    vector<string> crawl(string& startUrl, HtmlParser& htmlParser)
    {
        seen.insert(startUrl);
        auto origin = getHostname(startUrl);
        auto urls = getUrls(startUrl, htmlParser).get();
        auto sameOriginUrls = vector<string> {};
        for (auto& url : urls) {
            if (getHostname(url) == origin && !seen.contains(url)) {
                sameOriginUrls.emplace_back(url);
                seen.insert(url);
            }
        }
        if (sameOriginUrls.size()) {
            crawlMany(sameOriginUrls, htmlParser, origin);
        }
        return { seen.begin(), seen.end() };
    }

private:
    void crawlMany(vector<string>& urls, HtmlParser& htmlParser, string& origin)
    {
        if (urls.empty()) {
            return;
        }
        auto resUrls = vector<string> {};
        auto futures = vector<future<vector<string>>> {};
        for (auto& url : urls) {
            futures.emplace_back(getUrls(url, htmlParser));
        }
        for (auto& f : futures) {

            for (auto& u : f.get()) {
                resUrls.emplace_back(u);
            }
        }
        auto sameOriginUrls = vector<string> {};
        for (auto& url : resUrls) {
            if (getHostname(url) == origin && !seen.contains(url)) {
                sameOriginUrls.emplace_back(url);
                seen.insert(url);
            }
        }
        if (sameOriginUrls.size()) {
            crawlMany(sameOriginUrls, htmlParser, origin);
        }
    }
    future<vector<string>> getUrls(string& startUrl, HtmlParser& htmlParser)
    {

        return async([&]() {
            return htmlParser.getUrls(startUrl);
        });
    }
    static string getHostname(const string& url)
    {
        const auto firstSlash = url.find_first_of('/');
        const auto thirdSlash = url.find_first_of('/', firstSlash + 2);
        return url.substr(firstSlash + 2, thirdSlash - firstSlash - 2);
    }
};

} // namespace leetcode_test::web_crawler_multithreaded