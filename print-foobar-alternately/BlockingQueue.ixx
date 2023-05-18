module;
#include <climits>
#include <condition_variable>
#include <functional>
#include <mutex>
#include <queue>

export module leetcode_test.print_foobar_alternately.BlockingQueue;
using namespace std;
namespace leetcode_test::print_foobar_alternately {

export template <class E>
class BlockingQueue {

private:
    queue<E> _queue;
    int capacity = INT_MAX;
    condition_variable takeVariable, putVariable;
    mutable mutex lock;

public:
    BlockingQueue();
    /**
     *
     * @param capacity 队列允许的最大值,在put时size()大于此值时,put方法将会wait
     */
    BlockingQueue(int capacity);
    /**
     * size() == 0 时会阻塞
     * @param e
     * @return -1失败, 0成功
     */
    int take(E& e);
    /**
     * size >= capacity时会阻塞
     * @param e
     * @return
     */
    int put(const E& e);

    bool empty() const;

    unsigned int size() const;

    void pop();

    E back();

    E front();
};

template <class E>
BlockingQueue<E>::BlockingQueue() { }

template <class E>
BlockingQueue<E>::BlockingQueue(int capacity)
    : capacity(capacity)
{
}

template <class E>
int BlockingQueue<E>::take(E& e)
{
    unique_lock<mutex> uniqueLock(lock);
    while (_queue.empty()) {
        takeVariable.wait(uniqueLock);
    }
    if (_queue.empty())
        return -1;
    e = _queue.front();
    _queue.pop();
    putVariable.notify_one();
    return 0;
}

template <class E>
int BlockingQueue<E>::put(const E& e)
{
    unique_lock<mutex> uniqueLock(lock);
    while (_queue.size() >= capacity) {
        putVariable.wait(uniqueLock);
    }
    if (_queue.size() >= capacity)
        return -1;
    _queue.push(e);
    takeVariable.notify_one();
    return 0;
}

template <class E>
bool BlockingQueue<E>::empty() const
{
    lock_guard<mutex> lockGuard(lock);
    return _queue.empty();
}

template <class E>
unsigned int BlockingQueue<E>::size() const
{
    lock_guard<mutex> lockGuard(lock); // 利用变量作用域创建加锁,析构自动解锁
    return _queue.size();
}

template <class E>
void BlockingQueue<E>::pop()
{
    lock.lock();
    _queue.pop();
    lock.unlock();
}

template <class E>
E BlockingQueue<E>::back()
{
    lock_guard<mutex> lockGuard(lock);
    return _queue.back();
}

template <class E>
E BlockingQueue<E>::front()
{
    lock_guard<mutex> lockGuard(lock);
    return _queue.front();
}

} // namespace leetcode_test::print_foobar_alternately
