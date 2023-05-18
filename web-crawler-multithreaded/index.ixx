module;
#include <string>
#include <vector>
export module leetcode_test.web_crawler_multithreaded.Solution;
import leetcode_test.web_crawler_multithreaded.HtmlParser;
using std::string;
using std::vector;
namespace leetcode_test::web_crawler_multithreaded {

export class Solution {
public:
    vector<string> crawl(string startUrl, HtmlParser htmlParser) { }

private:
    static string getHostname(const string& url)
    {
        const int firstSlash = url.find_first_of('/');
        const int thirdSlash = url.find_first_of('/', firstSlash + 2);
        return url.substr(firstSlash + 2, thirdSlash - firstSlash - 2);
    }
};

} // namespace leetcode_test::web_crawler_multithreaded