module;
#include <functional>
#include <future>
#include <mutex>
#include <queue>

export module leetcode_test.building_h2o.H2O;
using namespace std;
namespace leetcode_test::building_h2o {
export class H2O {
public:
    int cnt_h = 0;
    condition_variable cv;
    mutex mu;

    H2O() { }

    void hydrogen(function<void()> releaseHydrogen)
    {
        unique_lock<mutex> lock(mu);
        cv.wait(lock, [this] { return this->cnt_h < 2; });
        // releaseHydrogen() outputs "H". Do not change or remove this line.
        releaseHydrogen();
        cnt_h++;
        if (cnt_h == 2)
            cv.notify_all();
    }

    void oxygen(function<void()> releaseOxygen)
    {
        unique_lock<mutex> lock(mu);
        cv.wait(lock, [this] { return this->cnt_h == 2; });
        // releaseOxygen() outputs "O". Do not change or remove this line.
        releaseOxygen();
        cnt_h = 0;
        cv.notify_all();
    }
};
} // namespace leetcode_test::building