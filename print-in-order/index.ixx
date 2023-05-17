module;
#include <functional>
#include <future>
#include <thread>
using std::function;
using std::future;
export module leetcode_test.print_in_order.Foo;
namespace leetcode_test::print_in_order {
export class Foo {
private:
    std::promise<void> outpromise2;
    std::promise<void> outpromise3;

public:
    Foo() { }

    void first(function<void()> printFirst)
    {

        // printFirst() outputs "first". Do not change or remove this line.
        printFirst();
        outpromise2.set_value();
    }

    void second(function<void()> printSecond)
    {
        future<void> fu = outpromise2.get_future();
        fu.get();
        // printSecond() outputs "second". Do not change or remove this line.
        printSecond();
        outpromise3.set_value();
    }

    void third(function<void()> printThird)
    {
        future<void> fu = outpromise3.get_future();
        fu.get();
        // printThird() outputs "third". Do not change or remove this line.
        printThird();
    }
};
} // namespace leetcode_test::print_in_order