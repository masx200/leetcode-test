

module;
#include <functional>
#include <utility>
export module leetcode_test.print_zero_even_odd.ZeroEvenOdd;
import leetcode_test.print_foobar_alternately.BlockingQueue;
using leetcode_test::print_foobar_alternately::BlockingQueue;
using namespace std;
namespace leetcode_test::print_zero_even_odd {
export class ZeroEvenOdd {
private:
    int n;

    pair<BlockingQueue<int>, BlockingQueue<int>> channelEven;
    pair<BlockingQueue<int>, BlockingQueue<int>> channelOdd;

public:
    ~ZeroEvenOdd() { }
    ZeroEvenOdd(int n) { this->n = n; }

    // printNumber(x) outputs "x", where x is an integer.
    void zero(function<void(int)> printNumber)
    {
        for (auto i = 1; i <= n; i++) {

            printNumber(0);

            if (i % 2) {

                channelOdd.second.put(i);
                auto msg2 = 0;
                channelOdd.first.take(msg2);

            } else {
                channelEven.second.put(i);
                auto msg2 = 0;
                channelEven.first.take(msg2);
            }
        }

        channelEven.second.put(-1);
        channelOdd.second.put(-1);
    }

    void even(function<void(int)> printNumber)
    {
        while (true) {
            auto msg = 0;
            channelEven.second.take(msg);
            if (msg == -1)
                return;
            printNumber(msg);
            channelEven.first.put(0);
        }
    }

    void odd(function<void(int)> printNumber)
    {
        while (true) {
            auto msg = 0;
            channelOdd.second.take(msg);
            if (msg == -1)
                return;
            printNumber(msg);
            channelOdd.first.put(0);
        }
    }
};
} // namespace leetcode_test::print_zero_even_odd