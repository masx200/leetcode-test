module;
#include <functional>
#include <mutex>
#include <queue>
export module leetcode_test.print_foobar_alternately.FooBar;
import leetcode_test.print_foobar_alternately.BlockingQueue;
using namespace std;
namespace leetcode_test::print_foobar_alternately {
export class FooBar {
private:
    int n = 0;
    BlockingQueue<int> fooinput;
    BlockingQueue<int> barinput;

public:
    ~FooBar() { }
    FooBar(int n) { this->n = n; }

    void foo(function<void()> printFoo)
    {

        for (int i = 0; i < n; i++) {

            int res = 0;
            barinput.take(res);

            printFoo();
            fooinput.put(0);
        }
    }

    void bar(function<void()> printBar)
    {

        for (int i = 0; i < n; i++) {

            barinput.put(0);

            int res = 0;
            fooinput.take(res);

            printBar();
        }
    }
};
}